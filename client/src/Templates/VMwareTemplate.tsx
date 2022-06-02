const VSPHERE={
  BEL: {
    CLUSTER: "domain-c108560",
    RESOURCE_POOL: "resgroup-108561",
    FOLDER: "group-v164200",
    DATASTORE: "datastore-199",
    NETWORK: 'network-145'
  },
  ENP: {
    CLUSTER: "domain-c26",
    RESOURCE_POOL: "resgroup-27",
    FOLDER: "group-v25109",
    DATASTORE: "datastore-61",
    NETWORK: 'network-131'
  }
}

const TEMPLATES={
  BEL: {
    HOST: "vabelvcenter.hevs.ch",
    MS_TLI: "d33c95ca-6935-4400-ac7c-fd37fc1678df",
    LX_TLI: "7166fb92-3c5e-4da7-8f11-6188f9005e4e"
  },
  ENP: {
    HOST: "vaenpvcenter.hevs.ch",
    MS_TLI: "fbc9e603-347e-4d19-977d-b35600248ebd",
    LX_TLI: "fbc9e603-347e-4d19-977d-b35600248ebd"
  }
}

const generateVMtemplate = (Name: String, Description: String, Site: string) => {
  return JSON.stringify({
    description: Description,
    disk_storage: {
      datastore: VSPHERE[Site].DATASTORE
    },
    hardware_customization: {
      memory_update: {
        memory: 4000
      },
      nics: {
        4000: {
          network: VSPHERE[Site].NETWORK
        }
      }
    },
    name: Name,
    placement: {
      cluster: VSPHERE[Site].CLUSTER,
      folder: VSPHERE[Site].FOLDER,
      resource_pool: VSPHERE[Site].RESOURCE_POOL
    },
    powered_on: true
  })
}

export { generateVMtemplate, TEMPLATES }
