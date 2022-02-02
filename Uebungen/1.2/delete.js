export function deleteAddress(adresses, id){

    return adresses.filter(x=> x.id !== +id);

}