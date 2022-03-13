//% weight=100 color=#ff6601 icon="\uf023" block="Šifra"
namespace Sifra {
    const znaky = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    /**
     * Zašiftuje zadaný znak caesarovou šifrou s libovolným posunem
     * @znak Znak k zašifrování
     * @key Posun
     */
    //% block="Zašifruj znak %znak caesarovou šifrou s posunem %posun"
    export function zasifrujZnak(znak: string, posun: number): string {
        znak = checkCharForDiacritics(znak.toLowerCase()[0])
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
     * Dešiftuje zadaný znak caesarovou šifrou s libovolným posunem
     * @znak Znak k dešifrování
     * @key Posun
     */
    //% block="Dešifruj znak %znak caesarovou šifrou s posunem %posun"
    export function desifrujZnak(znak: string, posun: number): string {
        znak = checkCharForDiacritics(znak.toLowerCase()[0])
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

    function checkCharForDiacritics(char: string): string {
        let aChars = ["á", "å", "ä", "â", "ą", "ā", "à", "ã", "â", "ă", "ả", "ạ"]
        let cChars = ["č", "ĉ", "ç", "ć"]
        let dChars = ["ď", "đ"]
        let eChars = ["é", "ě", "è", "ê", "ë", "ę", "ė", "ē"]
        let gChars = ["ĝ", "ģ", "ǧ"]
        let hChars = ["ĥ", "ȟ"]
        let iChars = ["í", "î", "ï"]
        let kChars = ["ķ"]
        let lChars = ["ł", "ĺ", "ľ"]
        let nChars = ["ň", "ņ", "ń", "ñ"]
        let oChars = ["ó", "ø", "õ", "ö", "ô", "ő", "ơ"]
        let rChars = ["ř", "ŕ"]
        let sChars = ["š", " ś", "ș"]
        let tChars = ["ť", "ț"]
        let uChars = ["ú", "ů", "ŭ", "ü", "ù", "û", "ų", "ū", "ű", "û", "ư"]
        let yChars = ["ý", "ÿ"]
        let zChars = ["ž", "ź", "ż"]

        for (const element of aChars) {
            if (element == char) {
                return "a"
            }
        }
        for (const element of cChars) {
            if (element == char) {
                return "c"
            }
        }
        for (const element of dChars) {
            if (element == char) {
                return "d"
            }
        }
        for (const element of eChars) {
            if (element == char) {
                return "e"
            }
        }
        for (const element of gChars) {
            if (element == char) {
                return "g"
            }
        }
        for (const element of hChars) {
            if (element == char) {
                return "h"
            }
        }
        for (const element of iChars) {
            if (element == char) {
                return "i"
            }
        }
        for (const element of kChars) {
            if (element == char) {
                return "k"
            }
        }
        for (const element of lChars) {
            if (element == char) {
                return "l"
            }
        }
        for (const element of nChars) {
            if (element == char) {
                return "n"
            }
        }
        for (const element of oChars) {
            if (element == char) {
                return "o"
            }
        }
        for (const element of rChars) {
            if (element == char) {
                return "r"
            }
        }
        for (const element of sChars) {
            if (element == char) {
                return "s"
            }
        }
        for (const element of tChars) {
            if (element == char) {
                return "t"
            }
        }
        for (const element of uChars) {
            if (element == char) {
                return "u"
            }
        }
        for (const element of yChars) {
            if (element == char) {
                return "y"
            }
        }
        for (const element of zChars) {
            if (element == char) {
                return "z"
            }
        }
        return char
    }

}