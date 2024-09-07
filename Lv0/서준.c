#include <stdio.h>
int main() {
  int money;
  float dis;

  printf("구매 금액은? ");
  scanf("%d", &money);
  printf("구매 금액 : %d\n", money);
  dis = money < 10000                        ? 0
        : (money < 50000 && money > 10000)   ? 5
        : (money >= 50000 && money < 300000) ? 7.5
                                            : 5;
  printf("할인율 : %.1f\n", dis);
  int money2 = (int)money * (dis / 100);
  printf("할인금액 : %d\n", money2);
  printf("지불금액 : %d", money - money2);
  return 0;
}
