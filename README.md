# Estudo TypeORM


## Criar Migration

```
npx typeorm-ts-node-commonjs migration:create src/infra/database/migration/MigrationaName
```

## Rodar Migrations

```
npx typeorm-ts-node-commonjs migration:run -d src/infra/database/config/data-source.ts
```

## Reverter Migrations

```
npx typeorm-ts-node-commonjs migration:revert -d src/infra/database/config/data-source.ts
```
