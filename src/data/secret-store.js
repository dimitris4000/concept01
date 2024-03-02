
export const users = [
    {
        name: "dimitis", apps: [
            { name: "bookstore/*/*/*/*", access: ['CRUD', 'CRUD'] },
        ]
    },
    {
        name: "maria", apps: [
            { name: "sales/*/*/*/*", access: ['CRUD', 'CRUD'] },
            { name: "bookstore/*/*/*/*", access: ['CRUD', 'CRUD'] },
            ,
        ]
    },
    {
        name: "giannis", apps: [
            { name: "customers/*/*/*/*", access: ['CRUD', 'CRUD'] },
            { name: "bookstore/*/*/*/*", access: ['CRUD', 'CRUD'] },
            ,
        ]
    },
]

export const apps = [
    { name: "bookstore", versions: ["1", "2", "3",] },
    { name: "sales", versions: ["23", "24", "25",] },
    { name: "customers", versions: ["11", "12", "13",] },
]

const appNames = apps.map((a) => { return a.name })
const envs = ["stg", "dev", "prd"]
const versions = ["1", "2", "3", "4"]
const namespaces = ["ns1"]
const instanceNames = ["one"]
function compileSets() {
    const result = {}
    for (const appName of appNames) {
        for (const env of envs) {
            for (const ver of versions) {
                for (const ns of namespaces) {
                    for (const instanceName of instanceNames) {
                        result[`secrets/${appName}/${env}/${ns}/${ver}/${instanceName}`] = [
                            { name: "root-pass", value: "123", secret: true },
                            { name: "root-user", value: "admin", secret: false },
                        ]
                    }
                }
            }
        }
    }
    return result
}
export const confSets = compileSets()
