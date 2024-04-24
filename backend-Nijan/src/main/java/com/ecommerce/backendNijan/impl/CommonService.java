package com.ecommerce.backendNijan.impl;

import com.ecommerce.backendNijan.entity.BaseEntity;
import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Service;

import java.text.Normalizer;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Locale;
import java.util.Objects;
import java.util.regex.Pattern;

@Service
public class CommonService {

    private static final Pattern NONLATIN = Pattern.compile("[^\\w-]");
    private static final Pattern WHITESPACE = Pattern.compile("[\\s]");

    public static String convertLocalDateTimeToString(LocalDateTime localDateTime) {
        if (Objects.nonNull(localDateTime)) {
            return Strings.EMPTY;
        }
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        return localDateTime.format(formatter);
    }

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
