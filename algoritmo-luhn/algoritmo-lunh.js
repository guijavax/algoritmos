let check = false;
let txtCard = document.getElementById('txtCard')
function checkfn () {
        this.check = true
        if (txtCard === undefined && txtCard ==='') {
          return
        }
        if (txtCard.length >= 16) {
          this.getCardNumber()
        } else {
          this.message = 'Favor verificar a quantidade de digítos do cartão!'
          this.$modal.show('error')
          return false
        }
        if (!this.check) {
          this.message = 'Cartão inválido!'
          this.$modal.show('error')
          return false
        }
        return true
      }
      function getCardNumber () {
        let cardNumber = txtCard
        let nums = []
        for (let i = 0; i < cardNumber.length; i++) {
          if (cardNumber.charAt(i) !== '-') {
            nums.push(cardNumber.charAt(i))
          }
        }
        if (!this.checkCard(nums)) {
          this.check = false
        } else {
          this.check = true
        }
      }
     function checkCard (nums) {
        let sumPair = 0
        let sumUnpaired = 0

        for (let i = 0; i < nums.length; i++) {
          if (i === 14 || (parseInt(i) % 2 === 0)) {
            let res = nums[i] * 2
            let digs = res.toString()
            if (digs.length === 2) {
              sumPair += (parseInt(digs.charAt(0)) + parseInt(digs.charAt(1)))
            } else {
              sumPair += (res + 0)
            }
          } else if (i === 15 || i % 2 === 1) {
            sumUnpaired += parseInt(nums[i])
          }
        }
        let sum = sumPair + sumUnpaired
        console.log(sum + '=' + sumPair + '' + sumUnpaired)
        if (sum % 10 === 0) {
          return true
        } else {
          return false
        }
      }
      