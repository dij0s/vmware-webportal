const VSPHERE={
  BEL: {
    CLUSTER: 'domain-c108560',
    RESOURCE_POOL: 'resgroup-108561',
    FOLDER: 'group-v164200',
    DATASTORE: 'datastore-199',
    NETWORK: 'network-145',
  },
  ENP: {
    CLUSTER: 'domain-c26',
    RESOURCE_POOL: 'resgroup-27',
    FOLDER: 'group-v25109',
    DATASTORE: 'datastore-61',
    NETWORK: 'network-131'
  }
}

const TEMPLATES={
  BEL: {
    HOST: 'vabelvcenter.hevs.ch',
    MS_TLI: 'd33c95ca-6935-4400-ac7c-fd37fc1678df',
    LX_TLI: '7166fb92-3c5e-4da7-8f11-6188f9005e4e'
  },
  ENP: {
    HOST: 'vaenpvcenter.hevs.ch',
    MS_TLI: 'fbc9e603-347e-4d19-977d-b35600248ebd',
    LX_TLI: 'fbc9e603-347e-4d19-977d-b35600248ebd'
  }
}

const TAGS={
  PRJ_Numero: 'urn:vmomi:InventoryServiceCategory:43ca7fbe-3434-4491-9176-eaf358769508:GLOBAL',
  PRJ_RespTechnique: 'urn:vmomi:InventoryServiceCategory:9f7a7559-744d-4a40-bf3a-966ed46682ed:GLOBAL',
  PRJ_RespMetier: 'urn:vmomi:InventoryServiceCategory:8d2c329a-4430-4666-b42f-6f2891672265:GLOBAL',
  PRJ_Unite: 'urn:vmomi:InventoryServiceCategory:80e9def1-6077-4172-b501-730426e6c10f:GLOBAL',
  SLA: 'urn:vmomi:InventoryServiceCategory:e3a646ce-90dc-4c83-a111-1224738163f2:GLOBAL',
  OS: 'urn:vmomi:InventoryServiceCategory:f8d4cc04-c682-4b18-af65-7b64fbc7d55e:GLOBAL',
}

const generateVMtemplate = (Name: String, Description: String, Site: string) => {
  return JSON.stringify({
    description: Description,
    disk_storage: {
      datastore: VSPHERE[Site].DATASTORE
    },
    hardware_customization: {
      memory_update: {
        memory: 4096
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

const generateTag = (Category_id: Number, Name: String) => {
  return JSON.stringify({
    category_id: Category_id,
    description: '',
    name: Name
  })
}

const generateTagAttachment = (ID: String, Tag_ids: []) => {
  return JSON.stringify({
    object_id: {
      id: ID,
      type: "VirtualMachine"
    },
    tag_ids: Tag_ids
  })
}

export { generateVMtemplate, generateTag, generateTagAttachment, TEMPLATES, TAGS }
