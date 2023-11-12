const compiler = (string) => {
    let enconding = ''
    let number = 0
    for(char in string){
        let letter = string[char]
      
        switch (letter) {
            case "#":
                number = number + 1
                break;

            case "*":
                number = number * number
                break;

            case "&":
                enconding += number.toString()
                break;

            case "@":
                number -= 1
                break;
            default:
                break;
        }

        
        
    }

    console.log(enconding)


}

compiler('&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&')