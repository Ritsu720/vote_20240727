<script>
import { RouterLink } from 'vue-router';
export default{
  data(){
    return{
      votes: [
        { type: 'Group Poll', title: 'test 1'},
        { type: 'Group Poll', title: 'test 2'},
        { type: 'To Only', title: 'test 3'},
      ]
    }
  },
  components:{
    RouterLink,
  },
  methods:{
    goTo(x){
      this.$router.push(x)
    },
  }
}
</script>


<template>
  <div class="showing">
    <div class="content page">
      <div class="first area">
        <div class="firstTitle">
          <p>Create a Vote</p>
        </div>
        <div class="voteChoice">
          <div class="choiceGroup choice">
            <p>Group Poll</p>
            <p class="textIntro">Choose your times, let people vote and find the option that suits everyone.</p>
          </div>
          <div class="choiceOne choice">
            <p>To Only</p>
            <p class="textIntro">Ask someone to pick a time that you specify.</p>
          </div>
        </div>
      </div>
      <div class="second area">
        <div class="secondTitle">
          <p>My Vote</p>
          <div class="addVote" @click="goTo('/AddVote')">
            <i class="fa-solid fa-plus"></i>
          </div>
        </div>
        <div class="myVoteArea">
          <div class="myVoteBlock" v-for="vote in votes">
            <p class="myVoteBlockType">{{ vote.type }}</p>
            <p class="myVoteBlockTitle">{{ vote.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>


<style lang="scss" scoped>
.showing{
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F8EDE3;
  p{
    margin: 0;
  }
}

.page{
  width: 98vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/* content */
.content{
  height: auto;
  min-height: 65vh;
  flex-direction: column;
}

/* 共通 */
.area{
  width: 90vw;
  height: 250px;
  text-align: start;
  font-size: 23pt;
}

.first{
  margin-top: 50px;
  // background-color: blue;
  .voteChoice{
    width: 100%;
    height: 200px;
    // background-color: red;
    display: flex;
    flex-direction: row;
    align-items: center;
    .choice{
      width: 300px;
      height: 160px;
      background-color: #ffffff77;
      margin-right: 30px;
      font-size: 18pt;
      padding: 10px;
      border-radius: 5px;
      .textIntro{
        margin-top: 15px;
        font-size: 15pt;
        font-weight: 350;
      }
    }
    .choiceGroup{
      outline: 1pt solid #BED1CF;
      margin-left: 50px;
      transition: background-color 0.2s ease;
      &:hover{
        background-color: #dcedea83;
      }
    }
    .choiceOne{
      outline: 1pt solid #E78895;
      transition: background-color 0.2s ease;
      &:hover{
        background-color: #edd2d68b;
      }
    }
  }
}

.second{
  margin: 20px;
  // background-color: blueviolet;
  .secondTitle{
    display: flex;
    flex-direction: row;
    align-items: center;
    .addVote{
      width: 30px;
      height: 30px;
      background-color: #8D493A;
      border-radius: 100%;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s ease;
      &:hover{
        background-color: #D0B8A8;
      }
      .fa-plus{
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 15pt;
        font-weight: 100;
        color: white;
        text-align: center;
        transition: background-color 0.2s ease;
        &:hover{
          color: #8D493A;
        }
      }
    }
  }
  .myVoteArea{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
    .myVoteBlock{
      height: 150px;
      width: 32%;
      background-color: #fff;
      border-radius: 5px;
      margin-top: 10px;
      padding: 15px;
      border: 1.5pt solid #ffffff;
      transition: background-color 0.2s ease;
      &:hover{
        border: 1.5pt solid #D0B8A8;
      }
      .myVoteBlockType{
        font-size: 12pt;
      }
      .myVoteBlockTitle{
        font-size: 20pt;
        margin-top: 3pt;
        color: #8D493A;
      }
    }
  }
}
</style>
