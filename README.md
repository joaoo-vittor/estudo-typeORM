# Estudo TypeORM


## Criar Migration

```
npx typeorm-ts-node-commonjs migration:create src/infra/database/migration/MigrationaName
```

> NPM COMMAND

```
npm run create-migration --name=<MIGRATION_NAME>
```

## Rodar Migrations

```
npx typeorm-ts-node-commonjs migration:run -d src/infra/database/config/data-source.ts
```

> NPM COMMAND

```
npm run run-migrations
```

## Reverter Migrations

```
npx typeorm-ts-node-commonjs migration:revert -d src/infra/database/config/data-source.ts
```

> NPM COMMAND

```
npm run revert-migration
```
