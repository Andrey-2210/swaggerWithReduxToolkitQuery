import type { ConfigFile } from '@rtk-query/codegen-openapi'

const config: ConfigFile = {
    schemaFile: 'https://petstore3.swagger.io/api/v3/openapi.json',
    apiFile: '../app/api/emptyApi.ts',
    apiImport: 'emptyApi',
    outputFiles: {
        './api/user.ts': {
            exportName: "userApi",
            filterEndpoints: [/user/i],
        },
        './api/order.ts': {
            exportName: "orderApi",
            filterEndpoints: [/order/i],
        },
        './api/pet.ts': {
            exportName: "petApi",
            filterEndpoints: [/pet/i],
        },
    },
    hooks: true
}
export default config
