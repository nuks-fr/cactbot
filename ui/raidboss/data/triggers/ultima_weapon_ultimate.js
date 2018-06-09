// Ultima Weapon Ultimate
[{
  zoneRegex: /^(The Weapon's Refrain \(Ultimate\)|Unknown Zone \(309\))$/,
  timelineFile: 'ultima_weapon_ultimate.txt',
  timeline: [
    'infotext "Feather Rain" before 3 "Move!"',
  ],
  triggers: [
    {
      id: 'UWU Garuda Slipstream',
      regex: /14:2B53:Garuda starts using (?:Unknown_2B53|Slipstream)/,
      condition: function(data) { return data.role == 'tank'; },
      alertText: {
        en: 'Slipstream',
      },
      tts: {
        en: 'Slipstream',
      },
    },
    {
      id: 'UWU Garuda Mistral Song Marker',
      regex: / 1B:........:(\y{Name}):....:....:0010:0000:0000:0000:/,
      suppressSeconds: 5,
      infoText: {
        en: 'Mistral Song',
      },
      tts: {
        en: 'Mistral Song',
      },
    },
    {
      id: 'UWU Garuda Spiny Plume',
      regex: / 03:Added new combatant Spiny Plume/,
      condition: function(data, matches) { return data.role == 'tank'; },
      infoText: {
        en: 'Spiny Plume Add',
      },
      tts: {
        en: 'Spiny Plume Add',
      },
    },
    {
      id: 'UWU Ifrit Fetters',
      regex: /1A:(\y{Name}) gains the effect of Infernal Fetters from/,
      condition: function(data, matches) { return data.me == matches[1]; },
      suppressSeconds: 45,
      alertText: {
        en: 'Fetters on YOU',
      },
      tts: {
        en: 'Fetters',
      },
    },
    {
      id: 'UWU Searing Wind',
      regex: / 14:2B5B:Ifrit starts using Inferno Howl on (\y{Name})/,
      condition: function(data, matches) { return data.me == matches[1]; },
      alarmText: {
        en: 'Searing Wind on YOU',
      },
      tts: {
        en: 'Searing Wind',
      },
    },
    {
      id: 'UWU Ifrit Flaming Crush',
      regex: / 1B:........:(\y{Name}):....:....:0075:0000:0000:0000:/,
      alertText: {
        en: 'Stack',
      },
      tts: {
        en: 'Stack',
      },
    },
    {
      id: 'UWU Garuda Woken',
      regex: / 1A:Garuda gains the effect of Woken from/,
      sound: 'Long',
    },
    {
      id: 'UWU Ifrit Woken',
      regex: / 1A:Ifrit gains the effect of Woken from/,
      sound: 'Long',
    },
    {
      id: 'UWU Titan Woken',
      regex: / 1A:Titan gains the effect of Woken from/,
      sound: 'Long',
    },
    // TODO: flaming crush 0075 marker
  ],
}]
