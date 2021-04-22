type Draw = [number, number, number, number, number, number];

export function lottery_draw(): Draw {
  const tab: Draw = [0, 0, 0, 0, 0, 0];
  const tab2 = tab.map(() => Math.round(Math.random() * 100));

  return tab2;
}

lottery_draw();
