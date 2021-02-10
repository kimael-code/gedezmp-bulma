
/**
 * Objeto que permite establecer el título de la tarjeta que muestra la tabla
 * de los datos leídos del archivo. Asocia un comando zmprov con una cadena.
 */
const ZMPROV_CMD = {
  aaa: 'CSV usable para: <code>$ zmprov addAccountAlias</code>',
  cps: 'CSV usable para: <code>$ zmprov checkPasswordStrength</code>',
  ca: 'CSV usable para: <code>$ zmprov createAccount</code>',
  cds: 'CSV usable para: <code>$ zmprov createDataSource</code>',
  cid: 'CSV usable para: <code>$ zmprov createIdentity</code>',
  csig: 'CSV usable para: <code>$ zmprov createSignature</code>',
  da: 'CSV usable para: <code>$ zmprov deleteAccount</code>',
  dds: 'CSV usable para: <code>$ zmprov deleteDataSource</code>',
  did: 'CSV usable para: <code>$ zmprov deleteIdentity</code>',
  dsig: 'CSV usable para: <code>$ zmprov deleteSignature</code>',
  ga: 'CSV usable para: <code>$ zmprov getAccount</code>',
  gds: 'CSV usable para: <code>$ zmprov getDataSources</code>',
  gid: 'CSV usable para: <code>$ zmprov getIdentities</code>',
  gsig: 'CSV usable para: <code>$ zmprov getSignatures</code>',
  gam: 'CSV usable para: <code>$ zmprov getAccountMembership</code>',
  gaaa: 'CSV usable para: <code>$ zmprov getAllAdminAccounts</code>',
  ma: 'CSV usable para: <code>$ zmprov modifyAccount</code>',
  mds: 'CSV usable para: <code>$ zmprov modifyDataSource</code>',
  mid: 'CSV usable para: <code>$ zmprov modifyIdentity</code>',
  msig: 'CSV usable para: <code>$ zmprov modifySignature</code>',
  raa: 'CSV usable para: <code>$ zmprov removeAccountAlias</code>',
  ra: 'CSV usable para: <code>$ zmprov renameAccount</code>',
  cpe: 'CSV usable para: <code>$ zmprov changePrimaryEmail</code>',
  sac: 'CSV usable para: <code>$ zmprov setAccountCos</code>',
  sp: 'CSV usable para: <code>$ zmprov setPassword</code>',
}

export default ZMPROV_CMD;