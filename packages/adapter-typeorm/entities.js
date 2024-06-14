var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, } from "typeorm";
const transformer = {
    date: {
        from: (date) => date && new Date(parseInt(date, 10)),
        to: (date) => date?.valueOf().toString(),
    },
    bigint: {
        from: (bigInt) => bigInt && parseInt(bigInt, 10),
        to: (bigInt) => bigInt?.toString(),
    },
};
let UserEntity = class UserEntity {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    Column({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], UserEntity.prototype, "name", void 0);
__decorate([
    Column({ type: "varchar", nullable: true, unique: true }),
    __metadata("design:type", Object)
], UserEntity.prototype, "email", void 0);
__decorate([
    Column({ type: "varchar", nullable: true, transformer: transformer.date }),
    __metadata("design:type", Object)
], UserEntity.prototype, "emailVerified", void 0);
__decorate([
    Column({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], UserEntity.prototype, "image", void 0);
__decorate([
    OneToMany(() => SessionEntity, (session) => session.userId),
    __metadata("design:type", Array)
], UserEntity.prototype, "sessions", void 0);
__decorate([
    OneToMany(() => AccountEntity, (account) => account.userId),
    __metadata("design:type", Array)
], UserEntity.prototype, "accounts", void 0);
UserEntity = __decorate([
    Entity({ name: "users" })
], UserEntity);
export { UserEntity };
let AccountEntity = class AccountEntity {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], AccountEntity.prototype, "id", void 0);
__decorate([
    Column({ type: "uuid" }),
    __metadata("design:type", String)
], AccountEntity.prototype, "userId", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], AccountEntity.prototype, "type", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], AccountEntity.prototype, "provider", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], AccountEntity.prototype, "providerAccountId", void 0);
__decorate([
    Column({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], AccountEntity.prototype, "refresh_token", void 0);
__decorate([
    Column({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], AccountEntity.prototype, "access_token", void 0);
__decorate([
    Column({
        nullable: true,
        type: "bigint",
        transformer: transformer.bigint,
    }),
    __metadata("design:type", Object)
], AccountEntity.prototype, "expires_at", void 0);
__decorate([
    Column({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], AccountEntity.prototype, "token_type", void 0);
__decorate([
    Column({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], AccountEntity.prototype, "scope", void 0);
__decorate([
    Column({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], AccountEntity.prototype, "id_token", void 0);
__decorate([
    Column({ type: "varchar", nullable: true }),
    __metadata("design:type", Object)
], AccountEntity.prototype, "session_state", void 0);
__decorate([
    ManyToOne(() => UserEntity, (user) => user.accounts, {
        createForeignKeyConstraints: true,
    }),
    __metadata("design:type", UserEntity)
], AccountEntity.prototype, "user", void 0);
AccountEntity = __decorate([
    Entity({ name: "accounts" })
], AccountEntity);
export { AccountEntity };
let SessionEntity = class SessionEntity {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], SessionEntity.prototype, "id", void 0);
__decorate([
    Column({ unique: true }),
    __metadata("design:type", String)
], SessionEntity.prototype, "sessionToken", void 0);
__decorate([
    Column({ type: "uuid" }),
    __metadata("design:type", String)
], SessionEntity.prototype, "userId", void 0);
__decorate([
    Column({ transformer: transformer.date }),
    __metadata("design:type", String)
], SessionEntity.prototype, "expires", void 0);
__decorate([
    ManyToOne(() => UserEntity, (user) => user.sessions),
    __metadata("design:type", UserEntity)
], SessionEntity.prototype, "user", void 0);
SessionEntity = __decorate([
    Entity({ name: "sessions" })
], SessionEntity);
export { SessionEntity };
let VerificationTokenEntity = class VerificationTokenEntity {
};
__decorate([
    PrimaryGeneratedColumn("uuid"),
    __metadata("design:type", String)
], VerificationTokenEntity.prototype, "id", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], VerificationTokenEntity.prototype, "token", void 0);
__decorate([
    Column(),
    __metadata("design:type", String)
], VerificationTokenEntity.prototype, "identifier", void 0);
__decorate([
    Column({ transformer: transformer.date }),
    __metadata("design:type", String)
], VerificationTokenEntity.prototype, "expires", void 0);
VerificationTokenEntity = __decorate([
    Entity({ name: "verification_tokens" })
], VerificationTokenEntity);
export { VerificationTokenEntity };
