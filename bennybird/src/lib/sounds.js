export default sounds = {
  presets: {
    pickup: [,0,1755,,.11,.41,,.8,,,550,.06,,,,,,.8,.09],
    pickup2: [,0,483,,.02,.11,2,.1,,,364,.06,,,,,,.96],
    follower_hit: [.5,,298,,,.31,3,2.58,,,,,,2,,.4,.12,.62,.04],
    player_hit: [,0,73,,,.35,1,.37,.2,,,,,1.8,,,.14,.66,.01],
    follower_pickup: [,0,1,.2,.3,.21,,2.7,,1.5,550,.06,.1,,,,,.5],
  },
  play(preset) {
    zzfx && zzfx(...this.presets[preset]);
  }
}