/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_empid, _empname, _empage, _empsalary, ) {
    const NFT = {
        "empid": _empid,
        "empname": _empname,
        "empage": _empage,
        "empsalary": _empsalary
    }
    NFTs.push(NFT);
    console.log("Minted:"+ _empid);


}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(let i = 0; i < NFTs.length ; i++){
    console.log("\nID: \t\t" + (i+ 1));
    console.log("EMPid: \t\t" + NFTs[i].empid);
    console.log("EMPname: \t" + NFTs[i].empname);
    console.log("EMPage:\t \t" + NFTs[i].empage);
    console.log("EMPsalary: \t" + NFTs[i].empsalary);
  }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
 console.log("\n" + NFTs.length);
}

// call your functions below this line
mintNFT("10129","Samuel","26","30 lacs");
mintNFT("10130","Aashi","21","56 lacs");
mintNFT("10131","Michelle","23","45 lacs");
mintNFT("10132","Ram","29","25 lacs");
listNFTs();
getTotalSupply();

