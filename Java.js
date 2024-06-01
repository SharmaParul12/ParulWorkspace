let nftCollection = [];
function mintNFT(name, creator, description) {
  const nft = {
    name: name,
    creator: creator,
    description: description,
    mintedAt: new Date()
  };
  nftCollection.push(nft);
  console.log(`NFT Minted: ${nft.name} by ${nft.creator}`);
}
function listNFTs() {
  console.log('Listing all NFTs:');
  nftCollection.forEach((nft, index) => {
    console.log(`NFT ${index + 1} - Name: ${nft.name}, Creator: ${nft.creator}, Description: ${nft.description}, Minted At: ${nft.mintedAt}`);
  });
}
function getTotalSupply() {
  console.log(`Total NFT Supply: ${nftCollection.length}`);
}
mintNFT('NFT One', 'Aman', 'The first NFT in the collection.');
mintNFT('NFT Two', 'Parul', 'The second NFT in the collection.');
mintNFT('NFT Three', 'Bhupesh', 'The third NFT in the collection.');
listNFTs();
getTotalSupply();
