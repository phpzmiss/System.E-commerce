package com.ecommerce.backendNijan.impl;

import com.ecommerce.backendNijan.entity.BaseEntity;
import org.springframework.stereotype.Service;

import java.text.Normalizer;
import java.time.LocalDateTime;
import java.util.Locale;
import java.util.regex.Pattern;

@Service
public class CommonService {

    private static final Pattern NONLATIN = Pattern.compile("[^\\w-]");
    private static final Pattern WHITESPACE = Pattern.compile("[\\s]");

    public String toSlug(String input) {
        String nowhitespace = WHITESPACE.matcher(input).replaceAll("-");
        String normalized = Normalizer.normalize(nowhitespace, Normalizer.Form.NFD);
        String slug = NONLATIN.matcher(normalized).replaceAll("");
        return slug.toLowerCase(Locale.ENGLISH);
    }

    @Deprecated
    public <T extends BaseEntity> void setCommonCreatedEntity(T entity) {
        entity.setCreatedAt(LocalDateTime.now());
        entity.setCreatedBy(1);
        entity.setUpdatedAt(LocalDateTime.now());
        entity.setUpdatedBy(1);
    }

    @Deprecated
    public <T extends BaseEntity> void setCommonUpdateEntity(T entity) {
        entity.setUpdatedAt(LocalDateTime.now());
        entity.setUpdatedBy(1);
    }
}
