import vue from 'vue'
import vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// Menghimpun data sama seperti property data()
	state: {
		listAgenda: [
			{ hari: 'senin', kegiatan: 'Belajar Vuejs' },
			{ hari: 'selasa', kegiatan: 'Belajar Codeigniter' },
			{ hari: 'rabu', kegiatan: 'Belajar Laravel' },
		]
	},
	// murations digunakan untuk melakukan perubahan state
	mutations: {

	},
	// actions sama seperti methods() untuk melakukan tindakan yang diinginkan
	actions: {

	}
})