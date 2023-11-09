export const about = ["Web Developer🕷️","Proud indian🚀","SEO Analyst📈"]

export function vowelcheck(item){
    const vowel = ["a","e","i","o","u"]
    const startwithvowel = vowel.some((vowel)=>item.toLowerCase().startsWith(vowel))
     return startwithvowel? "an":"a"
    
  }


  