//% weight=100 color=#ff6601 icon="\uf023" block="Šifra"
namespace Sifra {
    const znaky = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    /**
     * Zašiftuje zadaný znak ceasarovou šifrou s libovolným posunem
     * @znak Znak k zašifrování
     * @key Posun
     */
    //% block="Zašifruj znak %znak ceasarovou šifrou s posunem %posun"
    export function zasifrujZnak(znak: string, posun: number): string {
        znak = znak.toLowerCase()[0];
        let indexZnaku = znaky.indexOf(znak);
        if (indexZnaku != -1) {
            let finalniIndex = indexZnaku + posun;
            if (finalniIndex >= znaky.length) {
                finalniIndex = finalniIndex % znaky.length;
            } else if (finalniIndex < 0) {

                finalniIndex = znaky.length - ((-finalniIndex) % (znaky.length - 1));
            }
            return znaky[finalniIndex % znaky.length];
        } else {
            return znak;
        }

    }

    /**
     * Dešiftuje zadaný znak ceasarovou šifrou s libovolným posunem
     * @znak Znak k dešifrování
     * @key Posun
     */
    //% block="Dešifruj znak %znak ceasarovou šifrou s posunem %posun"
    export function desifrujZnak(znak: string, posun: number): string {
        znak = znak.toLowerCase()[0];
        let indexZnaku = znaky.indexOf(znak);
        if (indexZnaku != -1) {
            let finalniIndex = indexZnaku - posun;
            if (finalniIndex >= znaky.length) {
                finalniIndex = finalniIndex % znaky.length;
            } else if (finalniIndex < 0) {

                finalniIndex = znaky.length - ((-finalniIndex) % (znaky.length - 1));
            }
            return znaky[finalniIndex % znaky.length];
        } else {
            return znak
        }

    }

}