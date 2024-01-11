function determinarStatus(pontuacao) {
    if (pontuacao < 11) {
        return "ferro"
    } else if (pontuacao > 11 && pontuacao <= 21) {
        return "bronze"
    } else if (pontuacao > 21 && pontuacao <= 51) {
        return "prata"
    } else if (pontuacao > 51 && pontuacao <= 81) {
        return "Ouro"
    } else if (pontuacao > 81 && pontuacao <= 91) {
        return "diamante"
    } else if (pontuacao > 91 && pontuacao <= 101) {
        return "Diamante"
    } else if (pontuacao > 101) {
        return "Imortal"
    }
}

    let totalMatches = 100
    let person1 = 12
    let person2 = 45
    let person3 = 53
    let person4 = 99

    let statusPerson1 = determinarStatus(person1)
    let statusPerson2 = determinarStatus(person2)
    let statusPerson3 = determinarStatus(person3)
    let statusPerson4 = determinarStatus(person4)

    console.log("Status da Person1:", statusPerson1)
    console.log("Status da Person2:", statusPerson2)
    console.log("Status da Person3:", statusPerson3)
    console.log("Status da Person4:", statusPerson4)
    console.log("O Herói tem de saldo de ",person4,"vitorias","e está no nível de",  statusPerson4 )
