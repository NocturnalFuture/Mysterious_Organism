const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * [dnaBases.length])] 
  }
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (number,dnaBase) => {
    return {
      specimenNum: number,
      dna: dnaBase,
      mutate(){
        // Mutations
        const nucleobase = ['A', 'T', 'C', 'G']
        nucleobase.splice(nucleobase.indexOf(this.dna[Math.floor(Math.random()* this.dna.length)]),1)
        let mutatedBase = nucleobase[Math.floor(Math.random() * nucleobase.length)]
        console.log(`Changed ${this.dna[Math.floor(Math.random() * this.dna.length)]} to ${mutatedBase}`)
        return this.dna.splice(Math.floor(Math.random()* this.dna.length),1,mutatedBase) // Adding new Mutated String
      },
      compareDNA(pAequor){
        let firstSample = this.dna;
        let secondSample = pAequor;
        
        const misFit = firstSample.filter((el,index) => {
            if(!secondSample.includes(el)){
              return true
            }
        });
      const match = (misFit.length * 100) / firstSample.length

      return `sample #1 and sample #2 have ${match}% DNA in common`
      },

      willLikelySurvive(){
        let cgCounter = 0;
    
        const dnaCount = this.dna.map((el) => {
            if(el === 'C' || el === 'G'){
                cgCounter++
            }
        })
        
          
          
            const totalDNAlength = this.dna.length;
        
            const survivePercentage = (cgCounter*100) / totalDNAlength
            console.log(`${survivePercentage.toFixed()}%`)
            
            // survivePercentage > 60 ? true: false;
            if(survivePercentage > 60){
              return true
            } else {
              return false
            }
      }
    }

  }

const testMutation = pAequorFactory(1,mockUpStrand())
console.log(testMutation.willLikelySurvive())

testMutation.mutate()
console.log(testMutation.dna)