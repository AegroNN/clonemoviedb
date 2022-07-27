<template>
    <div class="d-flex justify-center flex-column">
        <v-card>
            <v-card-actions>
                <v-card-title>
                Sort
                </v-card-title>

                <v-spacer></v-spacer>

                <v-btn
                icon
                @click="sortShow = !sortShow"
                >
                <v-icon>{{ sortShow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="sortShow">
                    <v-divider></v-divider>
                    <div class="d-flex justify-center flex-column">
                    <v-select
                    style="width:80%"
                    :items="sorts"
                    :item-text="sorts[0]"
                    :value="sorts[0]"
                    outlined
                    ></v-select>
                    </div>
                </div>
            </v-expand-transition>
        </v-card>
         <v-card>
            <v-card-actions>
                <v-card-title>
                Filtre
                </v-card-title>

                <v-spacer></v-spacer>

                <v-btn
                icon
                @click="filtreShow = !filtreShow"
                >
                <v-icon>{{ filtreShow ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="filtreShow">
                    <div class="d-flex align-center flex-column">
                    <div style="width:80%">
                    <v-divider></v-divider>
                    <p>Göster bana</p>
                    <v-radio-group>
                        <v-radio
                        label="Her şey"
                        value="Her şey"
                        
                        >
                        </v-radio>
                        <v-radio
                        label="Görmediğim"
                        value="Görmediğim"
                        >
                        </v-radio>
                        <v-radio
                        label="Gördüğüm"
                        value="Gördüğüm"
                        ></v-radio>
                        </v-radio-group>
                        </div>
                        
                        <div style="width:80%">
                        <v-divider></v-divider>
                        <p>Kullanılabilirlikler</p>
                        <v-checkbox
                        input-value="true"
                        value
                        @click="kullanShow=!kullanShow"
                        label="İlk yayın tarihi arasın mı?"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="kullanShow"
                        input-value="true"
                        value
                        label="Stream"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="kullanShow"
                        input-value="true"
                        value
                        label="Ücretsiz"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="kullanShow"
                        input-value="true"
                        value
                        label="Reklamlar"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="kullanShow"
                        input-value="true"
                        value
                        label="Kirala"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="kullanShow"
                        input-value="true"
                        value
                        label="Satın al"
                        ></v-checkbox>
                        </div>
                        <div style="width:80%">
                        <v-divider></v-divider>
                        <p>İlk gösterim tarihleri</p>
                        <v-checkbox
                        input-value="true"
                        value
                        @click="tarihShow=!tarihShow"
                        label="İlk yayın tarihi arasın mı?"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="tarihShow"
                        input-value="true"
                        value
                        label="Tüm ülkeler arasın mı?"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="tarihShow"
                        input-value="true"
                        value
                        label="Gala"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="tarihShow"
                        input-value="true"
                        value
                        label="Sinema(sınırlı)"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="tarihShow"
                        input-value="true"
                        value
                        label="Sinema"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="tarihShow"
                        input-value="true"
                        value
                        label="Dijital"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="tarihShow"
                        input-value="true"
                        value
                        label="Fiziksel"
                        ></v-checkbox>
                        <v-checkbox
                        v-show="tarihShow"
                        input-value="true"
                        value
                        label="TV"
                        ></v-checkbox>
                        <v-menu
                        ref="startMenu"
                        v-model="startMenu"
                        :close-on-content-click="false"
                        :return-value.sync="startDate"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                        >
                        <template v-slot:activator="{ on, attrs }">
                        <v-combobox
                        v-model="startDate"
                        chips
                        small-chips
                        label="Şuradan"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        ></v-combobox>
                        </template>
                        <v-date-picker
                        v-model="startDate"
                        no-title
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                        text
                        color="primary"
                        @click="startMenu = false"
                        >İptal
                        </v-btn>
                        <v-btn
                        text
                        color="primary"
                        @click="$refs.startMenu.save(startDate)"
                        >Tamam
                        </v-btn>
                        </v-date-picker>
                    </v-menu>
                        <v-menu
                        ref="finishMenu"
                        v-model="finishMenu"
                        :close-on-content-click="false"
                        :return-value.sync="finishDate"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                        >
                        <template v-slot:activator="{ on, attrs }">
                        <v-combobox
                        v-model="finishDate"
                        chips
                        small-chips
                        label="Buraya"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        ></v-combobox>
                        </template>
                        <v-date-picker
                        v-model="finishDate"
                        no-title
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                        text
                        color="primary"
                        @click="finishMenu = false"
                        >İptal
                        </v-btn>
                        <v-btn
                        text
                        color="primary"
                        @click="$refs.finishMenu.save(finishDate)"
                        >Tamam
                        </v-btn>
                        </v-date-picker>
                    </v-menu>
                    </div>
                    <div style="width:80%">
                    <v-divider></v-divider>
                    <p>Türler</p>
                    <v-chip-group
                    active-class="primary--text"
                    column
                    >
                        <v-chip
                        v-for="genre in genres"
                        :key="genre"
                        >{{genre}}
                        </v-chip>
                    </v-chip-group>
                    </div>
                    <div style="width:80%">
                    <v-divider></v-divider>
                    <p>Kullanıcı skoru</p>
                    <v-range-slider
                    color="primary"
                    ticks="always"
                    tick-size="3"
                    :value="pointsArray"
                    min="0"
                    max="10"
                    :tick-labels="points"
                    ></v-range-slider>
                    </div>
                    <div style="width:80%">
                    <v-divider></v-divider>
                    <p>En az kullanılan oy</p>
                    <v-slider
                    color="primary"
                    ticks="always"
                    tick-size="3"
                    min="0"
                    max="10"
                    :tick-labels="votes"
                    thumb-label
                    ></v-slider>
                    </div>
                    <div style="width:80%">
                    <v-divider></v-divider>
                    <p>Film süresi</p>
                    <v-range-slider
                    color="primary"
                    ticks="always"
                    tick-size="3"
                    min="0"
                    max="10"
                    :value="pointsArray"
                    :tick-labels="time"
                    ></v-range-slider>
                    </div>
                    <div style="width:80%">
                    <v-divider></v-divider>
                    <p>Anahtar kelime</p>
                    <v-text-field
                    placeholder="Etikete göre filtrele..."
                    outlined
                    ></v-text-field>
                    </div>
                </div>
                </div>
            </v-expand-transition>
        </v-card>
        <v-btn
        rounded
        color="primary"
        dark
            >
        Ara
        </v-btn>
    </div>
</template>

<script>
export default {
    data(){
        return{
            sortShow:false,
            filtreShow:false,
            kullanShow:false,
            tarihShow:false,
            startDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            startMenu:false,
            finishDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            finishMenu:false,
            sorts:[
                'Azalan popülerlik','Artan popülerlik','Artan oy','Azalan oy','Artan çıkış tarihi','Azalan çıkış tarihi','Başlık(A-Z)'
            ],
            genres:[
                "Aile","Aksiyon","Animasyon","Belgesel","Bilim-kurgu","Dram","Fantastik","Gerilim","Gizem","Komedi","Korku","Macera","Müzik",
                "Romantik","Savaş","Suç","TV Film","Tarih","Vahşi batı"
            ],
            points:["0","","","","","5","","","","","10"],
            pointsArray:[0,10],
            votes:["0","","100","","200","","300","","400","","500"],
            time:["0","","60","","120","","180","","240","","300"]
        }
    }
}
</script>

<style scoped>
::v-deep .v-messages{
    min-height: 0 !important;
    height: 0 !important;
}
::v-deep .v-input--selection-controls{
    margin-top: 0 !important;
}

::v-deep .v-card{
    margin: 10px;
}

::v-deep .v-card-title{
    word-break: keep-all !important;
}

::v-deep .v-application--is-ltr .v-slider--horizontal .v-slider__tick:last-child .v-slider__tick-label{
    transform: none !important;
}
</style>