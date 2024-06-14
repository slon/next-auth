var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Property, Unique, PrimaryKey, Entity, OneToMany, Collection, ManyToOne, types, } from "@mikro-orm/core";
let User = class User {
    constructor() {
        this.id = crypto.randomUUID();
        this.email = "";
        this.emailVerified = null;
        this.sessions = new Collection(this);
        this.accounts = new Collection(this);
    }
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    Property({ type: types.string, nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "name", void 0);
__decorate([
    Property({ type: types.string, nullable: true }),
    Unique(),
    __metadata("design:type", Object)
], User.prototype, "email", void 0);
__decorate([
    Property({ type: types.datetime, nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "emailVerified", void 0);
__decorate([
    Property({ type: types.string, nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "image", void 0);
__decorate([
    OneToMany({
        entity: "Session",
        mappedBy: (session) => session.user,
        hidden: true,
        orphanRemoval: true,
    }),
    __metadata("design:type", Object)
], User.prototype, "sessions", void 0);
__decorate([
    OneToMany({
        entity: "Account",
        mappedBy: (account) => account.user,
        hidden: true,
        orphanRemoval: true,
    }),
    __metadata("design:type", Object)
], User.prototype, "accounts", void 0);
User = __decorate([
    Entity()
], User);
export { User };
let Session = class Session {
    constructor() {
        this.id = crypto.randomUUID();
    }
};
__decorate([
    PrimaryKey(),
    Property({ type: types.string }),
    __metadata("design:type", String)
], Session.prototype, "id", void 0);
__decorate([
    ManyToOne({
        entity: "User",
        hidden: true,
        onDelete: "cascade",
    }),
    __metadata("design:type", User)
], Session.prototype, "user", void 0);
__decorate([
    Property({ type: types.string, persist: false }),
    __metadata("design:type", Object)
], Session.prototype, "userId", void 0);
__decorate([
    Property({ type: "Date" }),
    __metadata("design:type", Object)
], Session.prototype, "expires", void 0);
__decorate([
    Property({ type: types.string }),
    Unique(),
    __metadata("design:type", Object)
], Session.prototype, "sessionToken", void 0);
Session = __decorate([
    Entity()
], Session);
export { Session };
let Account = class Account {
    constructor() {
        this.id = crypto.randomUUID();
    }
};
__decorate([
    PrimaryKey(),
    Property({ type: types.string }),
    __metadata("design:type", String)
], Account.prototype, "id", void 0);
__decorate([
    ManyToOne({
        entity: "User",
        hidden: true,
        onDelete: "cascade",
    }),
    __metadata("design:type", User)
], Account.prototype, "user", void 0);
__decorate([
    Property({ type: types.string, persist: false }),
    __metadata("design:type", Object)
], Account.prototype, "userId", void 0);
__decorate([
    Property({ type: types.string }),
    __metadata("design:type", Object)
], Account.prototype, "type", void 0);
__decorate([
    Property({ type: types.string }),
    __metadata("design:type", Object)
], Account.prototype, "provider", void 0);
__decorate([
    Property({ type: types.string }),
    __metadata("design:type", Object)
], Account.prototype, "providerAccountId", void 0);
__decorate([
    Property({ type: types.string, nullable: true }),
    __metadata("design:type", Object)
], Account.prototype, "refresh_token", void 0);
__decorate([
    Property({ type: types.string, nullable: true }),
    __metadata("design:type", Object)
], Account.prototype, "access_token", void 0);
__decorate([
    Property({ type: types.integer, nullable: true }),
    __metadata("design:type", Object)
], Account.prototype, "expires_at", void 0);
__decorate([
    Property({ type: types.string, nullable: true }),
    __metadata("design:type", Object)
], Account.prototype, "token_type", void 0);
__decorate([
    Property({ type: types.string, nullable: true }),
    __metadata("design:type", Object)
], Account.prototype, "scope", void 0);
__decorate([
    Property({ type: types.text, nullable: true }),
    __metadata("design:type", Object)
], Account.prototype, "id_token", void 0);
__decorate([
    Property({ type: types.string, nullable: true }),
    __metadata("design:type", Object)
], Account.prototype, "session_state", void 0);
Account = __decorate([
    Entity(),
    Unique({ properties: ["provider", "providerAccountId"] })
], Account);
export { Account };
let VerificationToken = class VerificationToken {
};
__decorate([
    PrimaryKey(),
    Property({ type: types.string }),
    __metadata("design:type", Object)
], VerificationToken.prototype, "token", void 0);
__decorate([
    Property({ type: "Date" }),
    __metadata("design:type", Object)
], VerificationToken.prototype, "expires", void 0);
__decorate([
    Property({ type: types.string }),
    __metadata("design:type", Object)
], VerificationToken.prototype, "identifier", void 0);
VerificationToken = __decorate([
    Entity(),
    Unique({ properties: ["token", "identifier"] })
], VerificationToken);
export { VerificationToken };
