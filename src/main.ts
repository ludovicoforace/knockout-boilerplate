import * as ko from 'knockout';
import { credits } from './components/credits';
import { itemList } from './components/itemList';
import { searchBox } from './components/searchBox';

export default class ViewM {
  animalItem = ko.observableArray(animal);
  animalFilter = ko.observable('');
  animalMatch = ko.observableArray(['']);
  itemList: void;
  searchBox: void;
  credits: void;

  constructor() {
    this.itemList = itemList();
    this.searchBox = searchBox();
    this.credits = credits();
  }
}

const animal = ['Aardvark', 'Abyssinian', 'Adelie Penguin', 'Affenpinscher', 'Afghan Hound', 'African Bush Elephant', 'African Civet', 'African Clawed Frog', 'African Forest Elephant', 'African Palm Civet', 'African Penguin', 'African Tree Toad', 'African Wild Dog', 'Ainu Dog', 'Airedale Terrier', 'Akbash', 'Akita', 'Alaskan Malamute', 'Albatross', 'Aldabra Giant Tortoise', 'Alligator', 'Alpine Dachsbracke', 'American Bulldog', 'American Cocker Spaniel', 'American Coonhound', 'American Eskimo Dog', 'American Foxhound', 'American Pit Bull Terrier', 'American Water Spaniel', 'Anatolian Shepherd Dog', 'Angelfish', 'Ant', 'Anteater', 'Antelope', 'Appenzeller Dog', 'Arctic Fox', 'Arctic Hare', 'Arctic Wolf', 'Armadillo', 'Asian Elephant', 'Asian Giant Hornet', 'Cairn Terrier', 'Camel', 'Canaan Dog', 'Capybara', 'Caracal', 'Carolina Dog', 'Cassowary', 'Cat', 'Caterpillar', 'Catfish', 'Cavalier King Charles Spa,niel', 'Centipede', 'Cesky Fousek', 'Chameleon', 'Chamois', 'Cheetah', 'Chesapeake Bay Retriever', 'Chicken', 'Chihuahua', 'Chimpanzee', 'French Bulldog', 'Frigatebird', 'Frilled Lizard', 'Frog', 'Fur Seal', 'Hammerhead Shark', 'Hercules Beetle', 'Hermit Crab', 'Heron', 'Highland Cattle', 'Himalayan', 'Hippopotamus', 'Honey Bee', 'Horn Shark', 'Horned Frog', 'Horse', 'Horseshoe Crab', 'Howler Monkey', 'Human', 'Humboldt Penguin', 'Hummingbird', 'Humpback Whale', 'Hyena', 'Ibis', 'Ibizan Hound', 'Iguana', 'Impala', 'Indian Elephant', 'Indian Palm Squirrel', 'Javan Rhinoceros', 'Javanese', 'Jellyfish', 'Kakapo', 'Kangaroo', 'Keel Billed Toucan', 'Killer Whale', 'King Crab', 'King Penguin', 'Kingfisher', 'Kiwi', 'Koala', 'Komodo Dragon', 'Kudu', 'Labradoodle', 'Labrador Retriever', 'Ladybird', 'Leaf-Tailed Gecko', 'Lemming', 'Lemur', 'Leopard', 'Leopard Cat', 'Leopard Seal', 'Leopard Tortoise', 'Liger', 'Lion', 'Lionfish', 'Little Penguin', 'Lizard', 'Llama', 'Lobster', 'Long-Eared Owl', 'Lynx', 'Neanderthal', 'Neapolitan Mastiff', 'Newfoundland', 'Newt', 'Nightingale', 'Norfolk Terrier', 'Norwegian Forest', 'Numbat', 'Nurse Shark', 'Ocelot', 'Octopus', 'Okapi', 'Old English Sheepdog', 'Olm', 'Opossum', 'Orang-utan', 'Ostrich', 'Otter', 'Oyster', 'Quail', 'Quetzal', 'Quokka', 'Quoll', 'Rabbit', 'Raccoon', 'Raccoon Dog', 'Radiated Tortoise', 'Ragdoll', 'Rat', 'Rattlesnake', 'Red Knee Tarantula', 'Red Panda', 'Red Wolf', 'Red-handed Tamarin', 'Reindeer', 'Rhinoceros', 'River Dolphin', 'River Turtle', 'Tiffany', 'Tiger', 'Tiger Salamander', 'Tiger Shark', 'Tortoise', 'Toucan', 'Tree Frog', 'Tropicbird', 'Tuatara', 'Turkey', 'Turkish Angora', 'Uakari', 'Uguisu', 'Umbrellabird', 'Vampire Bat', 'Vervet Monkey', 'Vulture', 'Wallaby', 'Walrus', 'Warthog', 'Wasp', 'Water Buffalo', 'Water Dragon', 'Water Vole', 'Weasel', 'Welsh Corgi', 'West Highland Terrier', 'Western Gorilla', 'Western Lowland Gorilla', 'Whale Shark', 'Whippet', 'White Faced Capuchin', 'White Rhinoceros', 'White Tiger', 'Wild Boar', 'Wildebeest', 'Wolf', 'Wolverine', 'Wombat', 'Woodlouse', 'Woodpecker', 'Woolly Mammoth', 'Woolly Monkey', 'Wrasse', 'Yak', 'Yorkshire Terrier', 'Zebra', 'Zebra Shark', 'Zebu', 'Zonkey', 'Zorse'];

ko.applyBindings(new ViewM());
