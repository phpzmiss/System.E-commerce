package com.ecommerce.backendNijan.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PageResponse<T> {

  private int pageNo;

  private int pageSize;

  private long totalElements;

  private int totalPages;

  private boolean last;

  private List<T> result;
}
