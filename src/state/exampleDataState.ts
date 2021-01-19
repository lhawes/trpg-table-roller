import { RPGGenerator } from '../types/Generator';
import { generatorStateKey } from './generator/generatorReducer';

export const exampleDataState: Record<string, RPGGenerator> = {
  [generatorStateKey]: {
    generatorName: 'Potion Maker',
    textTemplate: 'A {{1}} that {{2}} {{3}}. If ingested it will {{4}}, but will also {{5}} and {{5}}.',
    tables: [{
      name: 'Bottle Type',
      entries: [
        'clear glass bottle',
        'square green container',
        'topped drinking horn',
        'old corked wine bottle',
        'clay jug with an old cork',
        'small vial',
        'ceramic Elven vase'
      ]
    },
      {
        name: 'Smell',
        entries: [
          'smells putrid',
          'stings your nose when opened',
          'smells like flowers',
          'has an acrid smell permeating the container',
          'smells like dung'
        ]
      },
      {
        name: 'Look',
        entries: [
          'and looks worse than it smells',
          ' with a green liquid magically bubbling',
          'but is clear'
        ]
      },
      {
        name: 'Positive Effect',
        entries: [
          'make the drinker immune to fire',
          'give the consumer the ability to breath water',
          'mend the bones of the consumer',
          'expels poisons and venom from the body',
          'induces a hypnotic trance',
          'causes hardened plates to grow over the skin',
          `randomly changes the drinker's appearance`,
          `enhances the drinker's vision`,
          'makes a random sense sensitive to magic fields',
          'heals minor cuts and bruises',
          'reduce the gravity affecting the drinker'
        ]
      },
      {
        name: 'Negative Effect',
        entries: [
          `turn the the drinker's skin strange colors`,
          `cause immense strain on the body`,
          'make the consumer break out in hives',
          'make the user sensitive to loud noises',
          `severely reduce the drinker's coordination`,
          `make the drinker temporarily blind`,
          'magically fix the drinker on the spot'
        ]
      }],
    operations: [{
      currentTableIndex: '1',
      entryIndexs: '1, 2, 3, 4',
      nextTableIndex: '2',
    }],
    history: [
      'A ceramic Elven vase that smells like dung and looks worse than it smells. If ingested it will reduce the gravity affecting the drinker, but will also make the consumer break out in hives.'
    ],
    version: 1,
  },
}
