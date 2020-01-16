<template>
	<div>
		<div class="form-group">
			<label for="">Donatur</label>
			<select @change="$emit('selectedDonatur', $event.target.value)" class="form-control">
				<option value=""> Pilih Donatur </option>	
				<option v-for="donatur in listDonatur" :key="donatur.id" :value="donatur.id">
					{{ donatur.name }}
				</option>
			</select>
		</div>
	</div>
</template>
<script>
    export default {
        computed: {
            //MEMBUAT COMPUTED PROPERTY DENGAN NAMA listDonatur()
            listDonatur() {
                //DATA DIAMBIL DARI STATE MODULE donatur
                return this.$store.state.donatur.listDonatur
            }
        }
    }
</script>