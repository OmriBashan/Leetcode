var addBinary = function (a, b) {
            let Atail = a.length - 1;
            let Btail = b.length - 1;
            let carry = 0;
            let sum = "";
            while (Atail >= 0 || Btail >= 0 || carry) {
                const digitSum = (+a[Atail] || 0) + (+b[Btail] || 0) + carry;
                carry = Math.floor(digitSum / 2);
                sum = (digitSum % 2) + sum;

                Atail--;
                Btail--;
            }

            return sum;
        };