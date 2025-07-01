/*
  Warnings:

  - Added the required column `status` to the `trip_requests` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `trip_requests` ADD COLUMN `status` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `address_id` INTEGER NULL;
