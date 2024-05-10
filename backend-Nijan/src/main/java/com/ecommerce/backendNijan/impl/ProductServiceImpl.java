package com.ecommerce.backendNijan.impl;

import com.ecommerce.backendNijan.entity.PictureProductEntity;
import com.ecommerce.backendNijan.entity.ProductEntity;
import com.ecommerce.backendNijan.model.*;
import com.ecommerce.backendNijan.repository.PictureRepository;
import com.ecommerce.backendNijan.repository.ProductRepository;
import com.ecommerce.backendNijan.response.PageResponse;
import com.ecommerce.backendNijan.response.PictureProduct;
import com.ecommerce.backendNijan.response.Product;
import com.ecommerce.backendNijan.service.ProductService;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.nio.file.FileSystemNotFoundException;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private CommonService commonService;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private PictureRepository pictureRepository;

    @Value(value = "${target-source}")
    private String targetSource;

    private static final String TARGET_SOURCE = "src/main/resources/static/upload/";

    /**
     * Get all product.
     *
     * @return list of entity product.
     */
    public List<Product> getAll() {
        return productRepository.findAllProduct().stream()
          .map(pro -> {
              Product p = new Product();
              BeanUtils.copyProperties(pro, p);
              return p;
          })
          .toList();
    }

    /**
     * Get all product.
     *
     * @param filterProduct filterProduct
     * @param searchValue searchValue
     * @return list of entity product.
     */
    public PageResponse<ProductDto> getAllBySearchValue(FilterProduct filterProduct, String searchValue) {
        Pageable pageable = commonService.setPageable(filterProduct.getPageSize(),
          filterProduct.getPageNo(), filterProduct.getSortBy(), filterProduct.getSortDirection());
        try {
            Page<IProduct> productPage = productRepository.findAllProduct(searchValue, pageable);

            // Get content for page object
            List<IProduct> listOfProductModel = productPage.getContent();
            if (CollectionUtils.isEmpty(listOfProductModel)) {
                return PageResponse.<ProductDto>builder().build();
            }
            Map<Long, List<IProduct>> productMap = listOfProductModel.stream()
              .collect(Collectors.groupingBy(IProduct::getProductId));
            List<ProductDto> productDtoList = new ArrayList<>();
            for (Map.Entry<Long, List<IProduct>> entry : productMap.entrySet()) {
                List<IProduct> productList = entry.getValue();
                IProduct productPageOne = productList.get(0);
                ProductDto productDto = ProductDto.builder()
                  .categoryId(productPageOne.getCategoryId())
                  .productId(productPageOne.getProductId())
                  .productTitle(productPageOne.getTitle())
                  .productDescription(productPageOne.getDescription())
                  .productSummary(productPageOne.getSummary())
                  .productPrice(productPageOne.getPrice())
                  .productDiscountValue(productPageOne.getDiscountValue())
                  .quantity(productPageOne.getQuantity())
                  .productTags(productPageOne.getTags())
                  .createdAt(CommonService.convertLocalDateTimeToString(productPageOne.getCreatedAt()))
                  .build();

                List<PictureProduct> pictureProductList = new ArrayList<>();
                List<PictureProductEntity> pictureProductEntities =
                        pictureRepository.findAllByProductId(productPageOne.getProductId());
                for (PictureProductEntity product : pictureProductEntities) {
                    PictureProduct build = PictureProduct.builder()
                      .pictureId(product.getPictureId())
                      .pictureName(product.getFileName())
                      .pictureType(product.getFileType())
                      .pictureData((Objects.nonNull(product.getData())
                        ? ("data:image/png;base64," + Base64.getEncoder().encodeToString(product.getData()))
                        : Strings.EMPTY))
                      .build();
                    pictureProductList.add(build);
                }
                productDto.setPictureDtoList(pictureProductList);
                productDtoList.add(productDto);
            }

            return PageResponse.<ProductDto>builder()
              .result(productDtoList)
              .pageNo(productPage.getNumber())
              .pageSize(productPage.getSize())
              .totalElements(productPage.getTotalElements())
              .totalPages(productPage.getTotalPages())
              .last(productPage.isLast())
              .build();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * Get all product.
     *
     * @param filterProduct filterProduct
     * @return list of entity product.
     */
    public PageResponse<ProductDto> getAll(FilterProduct filterProduct) {
        Pageable pageable = commonService.setPageable(filterProduct.getPageSize(),
          filterProduct.getPageNo(), filterProduct.getSortBy(), filterProduct.getSortDirection());

        // Create pageable instance
        Page<IProduct> productPage = productRepository.findAllProduct(filterProduct.getCategoryId(), pageable);

        // Get content for page object
        List<IProduct> listOfProductModel = productPage.getContent();
        if (CollectionUtils.isEmpty(listOfProductModel)) {
            return PageResponse.<ProductDto>builder().build();
        }
        Map<Long, List<IProduct>> productMap = listOfProductModel.stream()
          .collect(Collectors.groupingBy(IProduct::getProductId));
        List<ProductDto> productDtoList = new ArrayList<>();
        for (Map.Entry<Long, List<IProduct>> entry : productMap.entrySet()) {
            List<IProduct> productList = entry.getValue();
            IProduct productPageOne = productList.get(0);
            ProductDto productDto = ProductDto.builder()
              .categoryId(productPageOne.getCategoryId())
              .productId(productPageOne.getProductId())
              .productTitle(productPageOne.getTitle())
              .productDescription(productPageOne.getDescription())
              .productSummary(productPageOne.getSummary())
              .productPrice(productPageOne.getPrice())
              .productDiscountValue(productPageOne.getDiscountValue())
              .quantity(productPageOne.getQuantity())
              .productTags(productPageOne.getTags())
              .createdAt(CommonService.convertLocalDateTimeToString(productPageOne.getCreatedAt()))
              .build();

            List<PictureProduct> pictureProductList = new ArrayList<>();
            List<PictureProductEntity> pictureProductEntities =
                    pictureRepository.findAllByProductId(productPageOne.getProductId());
            for (PictureProductEntity product : pictureProductEntities) {
                PictureProduct build = PictureProduct.builder()
                        .pictureId(product.getPictureId())
                        .pictureName(product.getFileName())
                        .pictureType(product.getFileType())
                        .pictureData((Objects.nonNull(product.getData())
                                ? ("data:image/png;base64," + Base64.getEncoder().encodeToString(product.getData()))
                                : Strings.EMPTY))
                        .build();
                pictureProductList.add(build);
            }
            productDto.setPictureDtoList(pictureProductList);
            productDtoList.add(productDto);
        }

        return PageResponse.<ProductDto>builder()
          .result(productDtoList)
          .pageNo(productPage.getNumber())
          .pageSize(productPage.getSize())
          .totalElements(productPage.getTotalElements())
          .totalPages(productPage.getTotalPages())
          .last(productPage.isLast())
          .build();
    }

    /**
     * Get all product.
     *
     * @param categoryId categoryId
     * @param limitItem limitItem
     * @return list of entity product.
     */
    public List<IProduct> getAll(Long categoryId, Integer limitItem) {
        return productRepository.findAllProduct(categoryId, limitItem);
    }

    /**
     * Get product item.
     *
     * @return entity product.
     */
    public Product getProductByKey(Long categoryId, Long productId) {
        List<IProduct> productList = new ArrayList<>(productRepository.findProductByKey(productId, categoryId));
        List<PictureProduct> pictureProductList = new ArrayList<>();
        if (CollectionUtils.isEmpty(productList)) {
            return null;
        }
        IProduct iProduct = productList.get(0);
        productList.forEach(product -> {
            pictureProductList.add(PictureProduct.builder()
              .pictureId(product.getPictureId())
              .pictureName(product.getFileName())
              .pictureType(product.getFileType())
              .pictureData((Objects.nonNull(product.getFileSize())
                ? ("data:image/png;base64," + Base64.getEncoder().encodeToString(product.getFileSize()))
                : Strings.EMPTY))
              .build());
        });
        return Product.builder()
          .productId(productId)
          .categoryId(categoryId)
          .categoryName(iProduct.getCategoryName())
          .productName(iProduct.getTitle())
          .summary(iProduct.getSummary())
          .description(iProduct.getDescription())
          .price(iProduct.getPrice())
          .quantity(iProduct.getQuantity())
          .discountType(iProduct.getDiscountType())
          .discountValue(iProduct.getDiscountValue())
          .tags(iProduct.getTags())
          .pictureProductList(pictureProductList)
          .build();
    }

    /**
     * Get product item.
     *
     * @return entity product.
     */
    public Optional<ProductEntity> getProductById(Long categoryId, Long productId) {
        return productRepository.findById(productId);
    }

    /**
     * Insert.
     *
     * @param productDto
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    public void insert(ProductDto productDto) throws IOException {
        ProductEntity productEntity = new ProductEntity();
        commonService.setCommonCreatedEntity(productEntity);
        commonService.toSlug(productDto.getProductTitle());
        productEntity.setCategoryId(productDto.getCategoryId());
        productEntity.setDescription(productDto.getProductDescription());
        productEntity.setTitle(productDto.getProductTitle());
        productEntity.setDiscountType("1");
        BigDecimal price = Objects.nonNull(productDto.getProductPrice()) ? productDto.getProductPrice() : BigDecimal.ZERO;
        double discountValue = Objects.nonNull(productDto.getProductDiscountValue()) ? productDto.getProductDiscountValue().doubleValue() : 0.0;
        productEntity.setDiscountValue(price.multiply(BigDecimal.valueOf(discountValue)).divide(BigDecimal.valueOf(100)));
        productEntity.setPrice(price);
        productEntity.setQuantity(productDto.getQuantity());
        productEntity.setSummary(productDto.getProductSummary());
        Long productId = productRepository.save(productEntity).getProductId();

        if (!CollectionUtils.isEmpty(productDto.getFiles())) {
            List<MultipartFile> multipartFiles = productDto.getFiles();
            this.insertFileImage(multipartFiles, productId);
        }
    }

    /**
     * Insert.
     *
     * @param productDto
     */
    @Override
    @Transactional
    public void update(ProductDto productDto) {

    }

    /**
     * Delete
     *
     * @param productId
     * @return
     */
    @Override
    @Transactional
    public boolean delete(Long productId) {
        try {
            productRepository.deleteById(productId);
            pictureRepository.deleteAllByProductId(productId);
            return true;
        } catch (Exception exception) {
            return false;
        }
    }

    /**
     * Insert file.
     *
     * @param files files
     * @param productId productId
     * @throws Error with image.
     */
    private void insertFileImage(List<MultipartFile> files, Long productId)
      throws IOException {
        int count = 1;
        for (MultipartFile file : files) {
            String fileName =
              StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));
            try {
                // Check file name
                if (fileName.contains("..")) {
                    throw new IOException("Filename contains invalid path sequence" + fileName);
                }

                // Insert data into database if type is insert.
                String type = fileName.contains("jpg") ? "jpg" : "png";
                fileName = "product_" + productId + "_" + count + "." + type;
                PictureProductEntity entity = this.toBuildSourceImage(file, fileName, productId);

                try {
                    String pathPng = targetSource + fileName;
                    file.transferTo(new File(pathPng));
                } catch (FileSystemNotFoundException exception) {
                    exception.printStackTrace();
                }
                // Save data into database.
                pictureRepository.save(entity);
                count++;
            } catch (IOException e) {
                throw new IOException("Could not save File: " + fileName);
            }
        }
    }

    /**
     * Upload file.
     *
     * @param pictureUploads pictureUploads
     * @param productId productId
     * @throws Error with image.
     */
    private void updateFileImages(List<PictureUpload> pictureUploads, Long productId) throws IOException {
        for (PictureUpload pic : pictureUploads) {
            Long pictureId = pic.getPictureId();
            MultipartFile file = pic.getFile();
            String fileName =
              StringUtils.cleanPath(Objects.requireNonNull(file.getOriginalFilename()));
            try {
                // Check file name
                if (fileName.contains("..")) {
                    throw new IOException("Filename contains invalid path sequence" + fileName);
                }

                PictureProductEntity entity;
                Optional<PictureProductEntity> imageInDatabase =
                  pictureRepository.findById(pictureId);
                if (imageInDatabase.isPresent()) {
                    entity = this.toBuildSourceImage(file, fileName, imageInDatabase.get());
                } else {
                    entity = this.toBuildSourceImage(file,
                      fileName, productId);
                }
                // Save data into database.
                try {
                    String pathPng = TARGET_SOURCE + fileName;
                    file.transferTo(new File(pathPng));
                } catch (FileSystemNotFoundException exception) {
                    exception.printStackTrace();
                }
                pictureRepository.save(entity);
            } catch (Exception e) {
                throw new IOException("Could not save File: " + fileName);
            }
        }
    }

    /**
     * To build source image use create new.
     *
     * @param file file
     * @param fileName fileName
     * @param productId productId
     * @return entity
     */
    private PictureProductEntity toBuildSourceImage(MultipartFile file, String fileName, Long productId)
      throws IOException {
        PictureProductEntity entity = new PictureProductEntity();
        entity.setProductId(productId);
        entity.setData(file.getBytes());
        entity.setFileType(file.getContentType());
        entity.setFileName(fileName);
        commonService.setCommonCreatedEntity(entity);

        return entity;
    }

    /**
     * To build source image use update.
     *
     * @param file file
     * @param fileName fileName
     * @param imageDatabase imageDatabase
     * @return entity
     */
    private PictureProductEntity toBuildSourceImage(MultipartFile file, String fileName,
                                                    PictureProductEntity imageDatabase)
      throws IOException {
        PictureProductEntity entity = new PictureProductEntity();
        entity.setPictureId(imageDatabase.getPictureId());
        entity.setProductId(imageDatabase.getProductId());
        entity.setData(file.getBytes());
        entity.setFileType(file.getContentType());
        entity.setFileName(fileName);
        commonService.setCommonUpdateEntity(entity);

        return entity;
    }
}
