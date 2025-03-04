<template>
  <div>





    <div class="main">




      <div class="ad">
        Ad
      </div>

      <div class="profile">

        <div class="profiletop">
          <div class="pic">
            pic
          </div>

          <div class="title">
            Profile
          </div>

          <div class="status" style="font-size: small;">
            *On-Time
          </div>
        </div>



        <div class="profilemid">
          <div class="early">

            <div>Early Starts</div>
            <div>--</div>

          </div>

          <div class="late">

            <div>Late Starts</div>
            <div>--</div>

          </div>

          <div class="ot">

            <div>Worked OT</div>
            <div>--</div>

          </div>

        </div>

        <div class="profilebot">

          <div>
            Today
          </div>

          <div>
            bar section
          </div>

          <div class="time">

            <div>time*</div>
            <div>time*</div>

          </div>

        </div>

      </div>

      <div>

      </div>




    </div>

    <div class="functions">



      <div class="checkin">

        <div class="icon">
          Scan icon*
        </div>
        <div>
          Scan Check-in
        </div>


      </div>

      <div class="checkin">

        <div class="icon">
          Pen Icon*
        </div>
        <div>
          Manual Check-in
        </div>

      </div>

      <div class="checkin">

        <div class="icon">
          Location icon*
        </div>
        <div>
          Easy Check-in
        </div>


      </div>

      <div class="checkin">
        <div class="icon">
          meter icon*
        </div>
        <div>
          Overtime
        </div>


      </div>



    </div>

    <div class="leavecurrency">
      <div>
        <div>
          Annual
        </div>
        <div class="number">
          XX days
        </div>
      </div>


      <div>
        <div>
          Casual
        </div>
        <div class="number">
          XX days
        </div>
      </div>
      <div class="view-all">View All Leave Balances</div>

    </div>

    <div class="buttons">


      <div class="leave">
        Leave
      </div>

      <div class="overtime">
        Overtime
      </div>


    </div>

  </div>
</template>
<style scoped>
/* main display */
.main {
  display: flex;
  flex-direction: column;
  padding: 0;
}

/* the ad */
.ad {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 25px 5px;
  border-radius: 5px;
}

/* the core */
.profile {
  padding: 10px 14px;
  box-shadow: 0px 4px 9px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}

/* the top core */
.profiletop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
}

.profiletop .pic {
  width: 15%;
}

.profiletop .title {
  width: 60%;
}

.profiletop .status {
  width: 25%;
}

/* the middle core */
.profilemid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 3 equal columns */
  text-align: center;
  /* Center the content */
  border-bottom: 1px solid grey;
  padding: 23px 6px;
}

.profilemid .early {
  font-size: smaller;
  display: flex;
  flex-direction: column;
}

.profilemid .late {
  font-size: smaller;
  border-left: 2px solid grey;
  border-right: 2px solid grey;
  display: flex;
  flex-direction: column;
}

.profilemid .ot {
  font-size: smaller;
  display: flex;
  flex-direction: column;
}

/* the bottom core */
.profilebot {
  display: grid;
  flex-direction: column;
  padding: 12px 5px;
}

.profilebot .time {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* mainly icons section */
.functions {
  display: grid;
  gap: 3px;
  grid-template-columns: auto auto auto auto;
  /* Automatically create rows as needed */
  row-gap: 10px;
  /* Optional: adds spacing between rows */
  text-align: center;
}

.functions .checkin {
  display: flex;
  flex-direction: column;
  gap: 5px;

}

.icon {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 4px;
}

/* Annual and Casual currency sector */
.leavecurrency {
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* 2 equal columns */
  grid-template-rows: auto auto;
  /* 2 rows */
  padding: 12px 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  gap: 10px;
  /* Optional spacing between grid items */
}

.leavecurrency .number {
  font-size: larger;
}

.leavecurrency .view-all {
  grid-column: span 2;
  /* Span across both columns */
  text-align: center;
  color: blue;
}


/* buttons for leave and overtime */
.buttons {
  display: grid;
  flex-direction: row;
  grid-template-columns: auto auto;
  gap: 10px;
  justify-content: space-between;
  padding: 15px 5px;
}

.buttons .leave {
  font-size: small;
  background-color: blue;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

.buttons .overtime {
  font-size: small;
  color: blue;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
</style>
