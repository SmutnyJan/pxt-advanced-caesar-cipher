/**
 * Použijte tento soubor k definování personalizovaných funkcí a bloků.
 * Přečtěte si více na https://makecode.microbit.org/blocks/custom
 */


/**
 * Custom blocks
 */
//% weight=100 color=#ff6601 icon="\uf023"
namespace Sifra {
    const characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    /**
     * Zašiftuje zadaný znak ceasarovou šifrou s libovolným posunem
     * @znak Znak k zašifrování
     * @key Posun
     */
    //% block="Zašifruj znak %znak ceasarovou šifrou s posunem %key"

    export function Zasifruj(znak: string, key: number): string {
        znak = znak.toLowerCase()[0]; //v případě, že dostaneme string, beru první index (nepřišel jsem na to, jak nastavit parametr jako char)
        let indexOfChar = characters.indexOf(znak);
        if (indexOfChar != -1) {
            let finalIndex = indexOfChar + key;
            if (finalIndex >= characters.length) {
                finalIndex = finalIndex % characters.length;
            } else if (finalIndex < 0) {

                finalIndex = characters.length - ((-finalIndex) % (characters.length - 1));
            }
            return characters[finalIndex % characters.length];
        } else {
            return znak;
        }

    }

    /**
     * Dešiftuje zadaný znak ceasarovou šifrou s libovolným posunem
     * @znak Znak k dešifrování
     * @key Posun
     */
    //% block="Dešifruj znak %znak ceasarovou šifrou s posunem %key"
    export function Desifruj(znak: string, key: number): string {
        znak = znak.toLowerCase()[0];
        let indexOfChar = characters.indexOf(znak);
        if (indexOfChar != -1) {
            let finalIndex = indexOfChar - key;
            if (finalIndex >= characters.length) {
                finalIndex = finalIndex % characters.length;
            } else if (finalIndex < 0) {

                finalIndex = characters.length - ((-finalIndex) % (characters.length - 1));
            }
            return characters[finalIndex % characters.length];
        } else {
            return znak
        }

    }

}