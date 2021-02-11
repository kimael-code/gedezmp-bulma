
/**
 * Objeto que permite *traducir* el nombre abreviado de un comando zmprov
 * a su forma completa.
 */
const ZMPROV_CMD = {
  aaa: 'addAccountAlias',
  cps: 'checkPasswordStrength',
  ca: 'createAccount',
  cds: 'createDataSource',
  cid: 'createIdentity',
  csig: 'createSignature',
  da: 'deleteAccount',
  dds: 'deleteDataSource',
  did: 'deleteIdentity',
  dsig: 'deleteSignature',
  ga: 'getAccount',
  gds: 'getDataSources',
  gid: 'getIdentities',
  gsig: 'getSignatures',
  gam: 'getAccountMembership',
  gaaa: 'getAllAdminAccounts',
  ma: 'modifyAccount',
  mds: 'modifyDataSource',
  mid: 'modifyIdentity',
  msig: 'modifySignature',
  raa: 'removeAccountAlias',
  ra: 'renameAccount',
  cpe: 'changePrimaryEmail',
  sac: 'setAccountCos',
  sp: 'setPassword',
}

export default ZMPROV_CMD;