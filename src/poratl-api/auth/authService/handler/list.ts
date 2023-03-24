import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

export class handle {
  public async getList() {
    const qry = [
      {
        color: 'purple',
        capacity: 7,
      },
      {
        color: 'green',
        capacity: 8,
      },
      {
        color: 'yellow',
        capacity: 9,
      },
    ];
    const data = qry.map((dat) => {
      return {
        id: randomUUID(),
        color: dat.color,
        capacity: dat.capacity,
      };
    });
    return data;
  }
}
