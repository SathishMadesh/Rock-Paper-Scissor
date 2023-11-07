const onCount = JSON.parse(localStorage.getItem('count'));

        let count = localStorage.getItem('count') !== null ?
        onCount : {Win : 0, Lose : 0, Tie : 0};

        updatingScore();

        function res (option) {
            const compRes = pickCompMove();

            let result = '';

            if (option === 'Scissor') {
                if (compRes === 'Rock') {
                result = 'You Lose.'
                }
                else if (compRes === 'Paper') {
                    result = 'You Win.'
                }
                else if (compRes === 'Scissor') {
                    result = 'Tie.'
                }
            }

            else if (option === 'Paper') {
                if (compRes === 'Rock') {
                result = 'You Win.'
                }
                else if (compRes === 'Paper') {
                    result = 'Tie.'
                }
                else if (compRes === 'Scissor') {
                    result = 'You Lose.'
                }
            }
            
            else {
                if (compRes === 'Rock') {
                    result = 'Tie.'
                }
                else if (compRes === 'Paper') {
                    result = 'You Lose.'
                }
                else if (compRes === 'Scissor') {
                    result = 'You Win.'
                }
            }

            if (result === 'You Win.') {
                count.Win += 1;
            }

            else if (result === 'You Lose.') {
                count.Lose += 1;
            }

            else if (result === 'Tie.') {
                count.Tie += 1;
            }

            localStorage.setItem('count', JSON.stringify(count));

            updateResult(result); 
            updatingScore();
            picks (option,compRes);

            return result;

        }

        function picks (option,compRes) {
            document.querySelector("#picks").innerHTML = 
            `You picked <img class="pick-icon" src="./${option}-emoji.png">
              -  Computer picked <img class="pick-icon" src="./${compRes}-emoji.png">`;
        };

        function updatingScore (){
            document.querySelector("#update-score").innerHTML = 
            `Wins : ${count.Win} , Losses : ${count.Lose} , Ties : ${count.Tie}`;
        }

        function updateResult(result) {
            document.querySelector("#update-result").innerHTML = `${result}`;
        };

        function pickCompMove () {
            const ranNum = Math.random();

            if(ranNum >= 0 && ranNum < 1/3) {
                compRes = 'Rock';
            }
            else if (ranNum >= 1/3 && ranNum < 2/3) {
                compRes = 'Paper';
            }
            else if (ranNum >= 2/3 && ranNum < 1) {
                compRes = 'Scissor';
            }

            console.log(compRes);
        
        return compRes;
        }