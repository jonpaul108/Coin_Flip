<script>



  let front = 0;
  let back = -180;

  let currFlip = 'Flip to get a result';
  let lastFlip = 'No flips recorded';

  $: currFlipMessage = `Most Recent Flip Results: ${currFlip}`;
  $: lastFlipMessage = `Last Flip Results: ${lastFlip}`;

  let nodeFront;
  let nodeBack;



  



  function changeNode(node) {
    console.log(node)
  }

  function handleSetProperties(frontRotate, backRotate, randomTime) {
    nodeFront.style.setProperty('--front-rotate', frontRotate + 'deg');
    nodeBack.style.setProperty('--back-rotate', backRotate + 'deg');
    nodeBack.style.setProperty('--transition-time', randomTime + 's');
    nodeFront.style.setProperty('--transition-time', randomTime + 's');
  }

  function handleFlip(e) {
    const randomNum = Math.ceil(Math.random() * 12) * 180;
    const randomTime = Math.ceil(Math.random() * 4 + 1);
    const frontRotate = randomNum;
    const backRotate = -180 + randomNum;
    handleSetProperties(frontRotate, backRotate, randomTime);
    lastFlip = currFlip;
    currFlip = 'flipping.....';
   
    setTimeout(() => {
      currFlip = !(randomNum % 360) ? '1: Heads' : '2: Tails';
      console.log('currFlip', currFlip, randomTime * 1000);
      console.log('end of function:', currFlipMessage, lastFlipMessage);
    },
    randomTime * 1000);
  }

  function waitingAnimation() {

  }

  function handleIntroStart() {
    console.log('started');
  }

</script>

<style>
:root {
  --front-rotate: 0deg;
  --back-rotate: -180deg;
  --transition-time: 2s;
}

  .coin {
    height: 10rem;
    width: 10rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }

  .side {
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: var(--transition-time) ease;
    transform-style: preserve-3d;
  }

  .coin-front {
    background-color: gold;
    transform: rotateY(var(--front-rotate));
    
  }

  .coin-back {
    background-color: silver;
     transform: rotateY(var(--back-rotate))
  }

  .coin-front::after {
    content: '1';
    position: absolute;
    top: 50%;
    left: 50%;
    color: rgb(150, 128, 7);
    transform: translate(-50%, -50%);
    font-size: 4rem;
    font-weight:bold;
  }

   .coin-back::after {
    content: '2';
    position: absolute;
    top: 50%;
    left: 50%;
    color: rgb(110, 106, 106);
    transform: translate(-50%, -50%);
    font-size: 4rem;
    font-weight:bold;
  }

  .coin_info_container {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  span {
    display: block;
    text-align: center;
    margin-top: 2em;
  }

  h1 {
    text-align: center;
  }

</style>


<h1>Flip coin</h1>

<div class='coint_info_container'>

  <div class="coin" on:click={handleFlip}>
    <div 
      class="side coin-front" 
      bind:this={nodeFront}
    >
    </div>
    <div 
      class="side coin-back"
      bind:this={nodeBack}
      on:introstart={handleIntroStart}
    >
    </div>

  </div>
    <div class='message container'>
    <span >{currFlipMessage}</span>
    <span >{lastFlipMessage}</span>

  </div>
</div>
