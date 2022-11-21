function classifyPhoneNumber(phoneNumber: string[]) {
    let viettel: string[] = [];
    let mobifone: string[] = [];
    let vinaphone: string[] = [];

    for (let i of phoneNumber) {
        switch (phoneNumber[i].substring(0, 3)) {
            case '086':
            case '096':
            case '097':
            case '098':
            case '032':
            case '033':
            case '034':
            case '035':
            case '036':
            case '037':
            case '038':
            case '039':
                return viettel.push(phoneNumber[i]);
        }
        switch (phoneNumber[i].substring(0, 3)) {
            case '088':
            case '091':
            case '094':
            case '083':
            case '084':
            case '085':
            case '081':
            case '082':
                return vinaphone.push(phoneNumber[i]);
        }
        switch (phoneNumber[i].substring(0, 3)) {
            case '089':
            case '090':
            case '093':
            case '070':
            case '079':
            case '077':
            case '076':
            case '078':
                return mobifone.push(phoneNumber[i]);
        }
    }
}
let listPhoneNumber: string[] = ['0863125456', '0961939448', '0379263805'];
console.log();
