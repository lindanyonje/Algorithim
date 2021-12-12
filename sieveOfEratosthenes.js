function GenerateSieve(max)
{
    // Creating an array indicating whether numbers are prime.
    const is_prime = new Array(max+1);

    for(let i=2; n<=max; i++)
    {
        is_prime[i]=true;
    }

    //Crossing out multiplies
    for(let i=2; n<=max; i++)
    {
        //Check if its prime
        if(is_prime[i])
        {
            //Eliminate the multiplies of i
            for(let j=i*2; j<=max; j+=i){
                is_prime[j]=false;
            }
        }
    }
    return is_prime;
}