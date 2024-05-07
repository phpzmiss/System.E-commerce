package com.ecommerce.backendNijan.repository;

import com.ecommerce.backendNijan.entity.CartItemsEntity;
import com.ecommerce.backendNijan.entity.CartItemsEntityKey;
import com.ecommerce.backendNijan.entity.CartsEntity;
import com.ecommerce.backendNijan.model.ICart;
import com.ecommerce.backendNijan.model.ICategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CartItemsRepository extends JpaRepository<CartItemsEntity, CartItemsEntityKey> {

}
