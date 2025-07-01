-- CreateTable
CREATE TABLE `address` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `calle` VARCHAR(100) NOT NULL,
    `numero` INTEGER NOT NULL,
    `postal_code` VARCHAR(100) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chofer` (
    `chofer_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rating` FLOAT NULL DEFAULT 5,
    `user_id` INTEGER NULL,

    INDEX `chofer_users_FK`(`user_id`),
    PRIMARY KEY (`chofer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `client` (
    `client_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,

    INDEX `cliente_users_FK`(`user_id`),
    PRIMARY KEY (`client_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trip_requests` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `chofer_id` INTEGER NOT NULL,
    `client_id` INTEGER NOT NULL,
    `estimated_price` FLOAT NOT NULL,

    INDEX `trip_requests_chofer_FK`(`chofer_id`),
    INDEX `trip_requests_client_FK`(`client_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(150) NOT NULL,
    `password` VARCHAR(200) NOT NULL,
    `stripe_card_id` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(100) NOT NULL,
    `address_id` INTEGER NOT NULL,

    INDEX `users_address_FK`(`address_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `chofer` ADD CONSTRAINT `chofer_users_FK` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `client` ADD CONSTRAINT `cliente_users_FK` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trip_requests` ADD CONSTRAINT `trip_requests_chofer_FK` FOREIGN KEY (`chofer_id`) REFERENCES `chofer`(`chofer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `trip_requests` ADD CONSTRAINT `trip_requests_client_FK` FOREIGN KEY (`client_id`) REFERENCES `client`(`client_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_address_FK` FOREIGN KEY (`address_id`) REFERENCES `address`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
