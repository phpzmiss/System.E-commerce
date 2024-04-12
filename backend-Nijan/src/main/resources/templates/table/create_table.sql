create table if not exists public.tbl_cart_items
(
    cart_id    bigserial
        primary key,
    price      numeric(38, 2),
    product_id bigint,
    quantity   bigint,
    created_by bigint,
    updated_by bigint,
    created_at timestamp,
    updated_at timestamp
);

alter table public.tbl_cart_items
    owner to postgres;

create table if not exists public.tbl_carts
(
    cart_id    bigserial
        primary key,
    status     varchar(255),
    created_by bigint,
    updated_by bigint,
    created_at timestamp,
    updated_at timestamp
);

alter table public.tbl_carts
    owner to postgres;

create table if not exists public.tbl_category
(
    category_id     bigserial
        primary key,
    description     varchar(255),
    name            varchar(255),
    parent_category bigint not null,
    slug            varchar(255),
    tags            varchar(255),
    created_by      bigint,
    updated_by      bigint,
    created_at      timestamp,
    updated_at      timestamp
);

alter table public.tbl_category
    owner to postgres;

create table if not exists public.tbl_credentials
(
    provider_id   bigserial
        primary key,
    hasher        varchar(255),
    password_hash varchar(255),
    password_salt varchar(255),
    provider_key  varchar(255),
    user_id       bigint,
    created_by    bigint,
    updated_by    bigint,
    created_at    timestamp,
    updated_at    timestamp
);

alter table public.tbl_credentials
    owner to postgres;

create table if not exists public.tbl_order
(
    order_id   bigserial
        primary key,
    user_id    bigint,
    created_by bigint,
    updated_by bigint,
    created_at timestamp,
    updated_at timestamp
);

alter table public.tbl_order
    owner to postgres;

create table if not exists public.tbl_order_lines
(
    order_line_id bigserial
        primary key,
    order_id      bigint,
    price         numeric(38, 2),
    product_id    bigint,
    quantity      bigint,
    created_by    bigint,
    updated_by    bigint,
    created_at    timestamp,
    updated_at    timestamp
);

alter table public.tbl_order_lines
    owner to postgres;

drop table public.tbl_product;
create table if not exists public.tbl_product
(
    product_id     bigserial
        primary key,
    category_id    bigint         not null,
    description    varchar(255),
    quantity       bigint,
    discount_type  varchar(255),
    discount_value numeric(38, 2),
    price          numeric(38, 2) not null,
    summary        varchar(30),
    tags           varchar(30),
    title          varchar(255)   not null,
    created_by     bigint,
    updated_by     bigint,
    created_at     timestamp,
    updated_at     timestamp
);

alter table public.tbl_product
    owner to postgres;

create table if not exists public.tbl_picture
(
    picture_id bigserial
        primary key,
    product_id bigint not null,
    file_name  varchar(255),
    file_type  varchar(255),
    data       bytea,
    created_by bigint,
    updated_by bigint,
    created_at timestamp,
    updated_at timestamp
);

alter table public.tbl_picture
    owner to postgres;

create table if not exists public.tbl_reviews
(
    review_id  bigserial
        primary key,
    comment    varchar(30),
    product_id bigint not null,
    rating     double precision,
    user_id    bigint not null,
    created_by bigint,
    updated_by bigint,
    created_at timestamp,
    updated_at timestamp
);

alter table public.tbl_reviews
    owner to postgres;

create table if not exists public.tbl_social_profiles
(
    user_id       bigserial
        primary key,
    platform      varchar(255),
    platform_user varchar(255),
    created_by    bigint,
    updated_by    bigint,
    created_at    timestamp,
    updated_at    timestamp
);

alter table public.tbl_social_profiles
    owner to postgres;

create table if not exists public.tbl_users
(
    user_id         bigserial
        primary key,
    avatar          varchar(255),
    bio             varchar(255),
    company         varchar(255),
    email           varchar(255) not null,
    email_validated varchar(255),
    last_login      varchar(255),
    locale          varchar(255),
    name            varchar(255),
    phone           varchar(255) not null,
    phone_validated varchar(255),
    role            varchar(3),
    slug            varchar(255),
    created_by      bigint,
    updated_by      bigint,
    created_at      timestamp,
    updated_at      timestamp
);

alter table public.tbl_users
    owner to postgres;

