<template>
  <div class="flex libelle">
    <div class="col-3">
      <p>Solde total</p>
      <p>Solde mensuel</p>
      <p>Gains mensuels</p>
      <p>Dépenses mensuelles</p>
    </div>
    <div class="col-3">
      <p>{{ sold }}</p>
      <p>{{ soldMens }}</p>
      <p>{{ earns }}</p>
      <p>{{ withdraw }}</p>
    </div>
    <div class="col-6">

    </div>
  </div>
</template>

<script>
import {ipcRenderer} from 'electron'

export default {
  name: "Header",
  data() {
    return {
      sold: 0,
      soldMens: 0,
      earns: 0,
      withdraw: 0
    }
  },
  created() {
    ipcRenderer.send('get-from-db', ['soldTotal', 'soldMens', 'earnMens', 'withdraw'])
    ipcRenderer.on('show-from-db', (event, args) => {
      this.sold = args[0]
      this.soldMens = args[1]
      this.earns = args[2]
      this.withdraw = args[3]
    })
  }
}
</script>

<style scoped>
.flex {
  display: flex;
  margin: 5px 25px;
}

p {
  text-align: start;
  font-size: 20px;
  color: #707070;
  line-height: 27px;
}

.col-3 {
  width: 25%;
}

.col-6 {
  width: 50%;
}
</style>