let konecnyText = ""
function Zasifruj (text: string, posun: number) {
    for (let i = 0; i <= text.length - 1; i++) {
        konecnyText = "" + konecnyText + Sifra.Zasifruj(text.charAt(i), posun)
    }
    return konecnyText
}
function Desifruj (text: string, posun: number) {
    for (let j = 0; j <= text.length - 1; j++) {
        konecnyText = "" + konecnyText + Sifra.Desifruj(text.charAt(j), posun)
    }
    return konecnyText
}
basic.forever(function () {
    basic.showString("" + (Desifruj("hovq zclal", 7)))
})
