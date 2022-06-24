async function web3Login() {
    if (!window.ethereum) {
        /* Open Provider Error Alert */
        document.getElementById("provider-error").classList.add("show");
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const address = await provider.getSigner().getAddress();
    console.log(address);
}

document.querySelector("#connect-wallet").addEventListener('click', function() {
    web3Login();
});

/* Close Provider Error Alert */
document.querySelector("#provider-error > .close").addEventListener("click", function() {
    document.getElementById("provider-error").classList.remove("show");
});