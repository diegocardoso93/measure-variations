<template>
  <div class="elevation">
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="country1">Country</label>
          <md-select v-model="country1" name="country1">
            <md-option value=""></md-option>
            <md-option v-for="(indexes, country) in countries"
              v-bind:key="country"
              v-bind:value="indexes.join(',')"
            >
              {{ country }}
            </md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <label for="sequence1">Sequence</label>
          <md-select v-model="sequence1" name="sequence1" class="sequence">
            <md-option v-for="sequence in sequences1"
              v-bind:key="sequence"
              v-bind:value="sequence"
            >
              {{ sequence }}
            </md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="country2">Country</label>
          <md-select v-model="country2" name="country2">
            <md-option value=""></md-option>
            <md-option v-for="(indexes, country) in countries"
              v-bind:key="country"
              v-bind:value="indexes.join(',')"
            >
              {{ country }}
            </md-option>
          </md-select>
        </md-field>
      </div>
      <div class="md-layout-item">
        <md-field>
          <label for="sequence2">Sequence</label>
          <md-select v-model="sequence2" name="sequence2" class="sequence">
            <md-option v-for="sequence in sequences2"
              v-bind:key="sequence"
              v-bind:value="sequence"
            >
              {{ sequence }}
            </md-option>
          </md-select>
        </md-field>
      </div>
    </div>
    <md-button class="md-raised md-primary" v-on:click="onCompare">Compare</md-button>

    <h3>{{ distance }}</h3>
    <md-content class="md-elevation-10 md-scrollbar">
      <span v-for="(partContainer, index) in partContainers"
        v-bind:key="index"
        v-bind:class="[partContainer.color, partContainer.backgroundColor]"
      >{{ partContainer.parts.join('') }}</span>
    </md-content>
  </div>
</template>

<script>
  import {Comparison} from "sequences-comparer";

  export default {
    name: 'App',
    data: () => ({
      comparison: null,
      referenceString: '',
      references: null,
      partContainers: [],
      countries: {},
      country1: '',
      country2: '',
      sequences1: [],
      sequences2: [],
      sequence1: '',
      sequence2: '',
      distance: ''
    }),
    created: async function () {
      await fetch('references.csv')
        .then(response => response.text())
        .then(text => this.referenceString = text);

      this.references = this.referenceString.split('\n');
      for (const [idx, ref] of this.references.entries()) {
        if (ref === this.references[0]) continue;
        const country = ref.split(',')[2];
        this.countries[country] = this.countries[country] || [];
        this.countries[country].push(idx);
      }
      this.$forceUpdate();
    },
    methods: {
      onOption: function (option, val) {
        if (val) {
          if (option === 'sequence1') {
            this.sequences1 = [];
            this.sequence1 = '';
          } else {
            this.sequences2 = [];
            this.sequence2 = '';
          }
          const options = val.split(',');
          for (const [idx, ref] of this.references.entries()) {
            if (options.includes(''+idx)) {
              option === 'sequence1' ?
                this.sequences1.push(ref.split('T00:00:00Z')[0]) :
                this.sequences2.push(ref.split('T00:00:00Z')[0]);
            }
          }
          this.$forceUpdate();
        }
      },
      onCompare: async function () {
          const [file1, file2] = [
            this.sequence1.split(',')[0],
            this.sequence2.split(',')[0]
          ];
          const file1Content = await fetch('files/' + file1)
            .then(response => response.text());
          const file2Content = await fetch('files/' + file2)
            .then(response => response.text());

          const comparison = Comparison.new(file1Content, file2Content);
          for (let nucleotide of comparison.diffs()) {
            if (nucleotide == 0 || nucleotide == 1 || (nucleotide == 255)) {
              this.partContainers.push({
                parts: [],
                color: nucleotide == 0 && 'green',
                backgroundColor: (nucleotide == 1 && 'back-green') || (nucleotide == 255 && 'back-red')
              });
              continue;
            }
            this.partContainers[this.partContainers.length - 1].parts.push(
              String.fromCharCode(nucleotide)
            );
          }
          this.distance = 'Distance: ' + comparison.distance();
      }
    },
    watch: {
      country1: function (val) {
        this.onOption('sequence1', val);
      },
      country2: function (val) {
        this.onOption('sequence2', val);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .elevation {
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .md-layout {
    max-width: 100vh;
    width: 600px;
  }

  .md-content {
    width: 736px;
    max-width: 95vw;
    height: 83vh;
    overflow: auto;
    background: #212121;
    line-break: anywhere;
    font-family: monospace;
    margin: 10px;
    padding: 6px;
    max-height: 64vh;
  }

  .green {
    color: green;
  }

  .back-green {
    background-color: green;
  }

  .back-red {
    background-color: red;
  }

  h3 {
    margin: 0;
    margin-top: 10px;
  }

</style>
