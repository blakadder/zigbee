---
date_added: 2021-11-23
model: ZYZB010
vendor: eWeLight
title: Light Module DIY
category: light
mlink: https://www.aliexpress.com/item/1005003595899955.html
link: www.easyiot.tech
zigbeemodel: ['ZB-CL01','ZB-SW02']
compatible: [z2m,zha,tasmota,deconz]
---
ZigBee 3.0 1-5 channel switch,Plug,1-5 PWM Light(W,CW,RGB,RGBW,RGBCW)
(multiple variants exist, all with model ZYZB010)

Telink TLSR8258 module

<h2>Connections</h2>
<pre>
    _____________________
   |  ____    __    __   |
   | | |  |__|  |__|  |  |
   |            ZYZB010  |
 1 | Vcc             RST | 24
 2 | Gnd              C1 | 23
 3 | Vcc              C0 | 22
 4 | SWS-A7        B7-Rx | 21
 5 | D2            D7-Tx | 20
 6 | D3               B6 | 19
 7 | C3               B1 | 18
 8 | C2               B5 | 17
 9 | nc               B4 | 16
10 | D4               A1 | 15
11 | nc               C4 | 14
12 | A0               nc | 13
   |_____________________|
</pre>
<table border=1>
  <tr><th>Pin</th><th>     </th><th> 1-5 On/Off switch                                   </th><th> 1-5 PWM outputs                            </th><th> 1-3 Bi-stable relay output (Low power module)       </th></tr> 
  <tr><td>1 </td><td>VCC   </td><td> Power Supply 3.3V                                   </td><td> Power Supply 3.3V                          </td><td> Power Supply 3.3V                                   </td></tr> 
  <tr><td>2 </td><td>GND   </td><td> GND                                                 </td><td> GND                                        </td><td> GND                                                 </td></tr>
  <tr><td>3 </td><td>SWS-A7</td><td> Debug and Download interface: SWS                   </td><td> Debug and Download interface: SWS          </td><td> Debug and Download interface: SWS                   </td></tr>
  <tr><td>4 </td><td>D2    </td><td> GPIO : D2                                           </td><td> GPIO : D2                                  </td><td> IN 2 : Switch Signal Input, Active Low, Pair mode   </td></tr>
  <tr><td>5 </td><td>D3    </td><td> GPIO : D3                                           </td><td> FAC_RST, Active Low, Pair mode             </td><td> GPIO : D3                                           </td></tr>
  <tr><td>6 </td><td>C3    </td><td> OUT 5 : Relay signal output, Active High            </td><td> PWM2 (Warm White)                          </td><td> IN 1 : Switch Signal Input, Active Low, Pair mode   </td></tr> 
  <tr><td>7 </td><td>C2    </td><td> IN 5 : Switch Signal Input, Active Low, Pair mode   </td><td> PWM1 (Cold White)                          </td><td> OUT 1 ON : 15 ms High pulse                         </td></tr>
  <tr><td>8 </td><td>NC    </td><td> Not Connected                                       </td><td> Not Connected                              </td><td> Not Connected                                       </td></tr> 
  <tr><td>9 </td><td>NC    </td><td> Not Connected                                       </td><td> Not Connected                              </td><td> Not Connected                                       </td></tr>
  <tr><td>10</td><td>D4    </td><td> IN 4 : Switch Signal Input, Active Low, Pair mode   </td><td> GPIO : D4                                  </td><td> OUT 2 OFF : 15 ms High pulse                        </td></tr>
  <tr><td>11</td><td>NC    </td><td> Not Connected                                       </td><td> Not Connected                              </td><td> Not Connected                                       </td></tr>
  <tr><td>12</td><td>A0    </td><td> IN 1 : Switch Signal Input, Active Low, Pair mode   </td><td> GPIO : A0                                  </td><td> OUT 2 On/Off Status, Active High                    </td></tr>
  <tr><td>13</td><td>NC    </td><td> Not Connected                                       </td><td> Not Connected                              </td><td> Not Connected                                       </td></tr>
  <tr><td>14</td><td>C4    </td><td> OUT 4 : Relay signal output, Active High            </td><td> PWM3: (Red)                                </td><td> OUT 3 OFF : 15 ms High pulse                        </td></tr>
  <tr><td>15</td><td>A1    </td><td> Pair Mode LED, flash in Pair Mode, else Low         </td><td> GPIO : A1                                  </td><td> Pair Mode LED, flash in Pair Mode, else Low         </td></tr> 
  <tr><td>16</td><td>B4    </td><td> OUT 1 : Relay signal output, Active High            </td><td> PWM4 (Greeen)                              </td><td> OUT 2 ON : 15 ms High pulse                         </td></tr> 
  <tr><td>17</td><td>B5    </td><td> OUT 3 : Relay signal output, Active High            </td><td> PWM5 (Blue)                                </td><td> IN 3 : Switch Signal Input, Active Low, Pair mode   </td></tr>
  <tr><td>18</td><td>B1    </td><td> OUT 2 : Relay signal output, Active High            </td><td> GPIO : B1                                  </td><td> OUT 1 On/Off Status, Active High                    </td></tr>
  <tr><td>19</td><td>B6    </td><td> GPIO : B6                                           </td><td> GPIO : B6                                  </td><td> GPIO : B6                                           </td></tr>
  <tr><td>20</td><td>D7    </td><td> GPIO : D7                                           </td><td> GPIO : D7                                  </td><td> OUT 1 OFF : 15 ms High pulse                        </td></tr>
  <tr><td>21</td><td>B7    </td><td> GPIO : B7                                           </td><td> GPIO : B7                                  </td><td> OUT 3 On/Off Status, Active High                    </td></tr>
  <tr><td>22</td><td>C0    </td><td> IN 3 : Switch Signal Input, Active Low, Pair mode   </td><td> GPIO : C0                                  </td><td> OUT 3 ON : 15 ms High pulse                         </td></tr>
  <tr><td>23</td><td>C1    </td><td> IN 2 : Switch Signal Input, Active Low, Pair mode   </td><td> GPIO : C1                                  </td><td> GPIO : C1                                           </td></tr>
  <tr><td>24</td><td>RST   </td><td> nRST, Active Low                                    </td><td> nRST, Active Low                           </td><td> nRST, Active Low                                    </td></tr>
</table>
Minimal use: connect Vcc and Gnd, and OUT and IN as needed.

<h2>Tips</h2>
<ul>
  <li>Switching output (1-5 Ch On/Off type) work only with pulse switches, no on/off switch input.</li>
  <li>When not paired to Zigbee network, module goes automatically into pairing mode.</li>
  <li>INputs have internal pull-up, so only need a switch to ground.</li>
  <li>To go into pairing mode, connect one of the switch inputs to Gnd for more than 5 seconds. The (relay) output will blink a couple of times, the pairing indicator output will keep blinking until paired.</li>
  <li>PCB antenna is not as powerful/sensitive as usual for complete devices. I needed to be close to my Zigbee hub to get pairing working the 1st time.</li>
</ul>
