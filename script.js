// complete the given function

function palindrome(str){
	let start = str[0];
	let end = str.length;
	for(let i = 0; i < str.length; i++)
		{
			if(start != end)
			{
				start++;
				end--;
				return true;
			}
			else
			{
				return false;
			}
		}
}
module.exports = palindrome
