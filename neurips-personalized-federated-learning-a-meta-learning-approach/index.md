# [NeurIPS] Personalized Federated Learning: A Meta-Learning Approach解读


**Title:** Personalized Federated Learning: A Meta-Learning Approach

**INFO:** 34th Conference on Neural Information Processing Systems (NeurIPS 2020)

###### 研究背景

目前的联邦学习框架是基于所有users的数据，整合训练出一个最优的server模型。

>  However, this scheme only develops a common output for all the users, and, therefore, it does not adapt the model to each user.

但是，这样训练处来的server模型不一定适用于每一个user，尤其在不同的users所独有的数据差异比较大的时候。

> This is an important missing feature, especially given the heterogeneity of the underlying data distribution for various users.

在heterogeneous的情景下，使用federated averaging方法训练出来的模型可能在每个独立user上的表现会比较差。

>  In particular, in the heterogeneous settings where the underlying data distribution of users are not identical, the resulted global model obtained by minimizing the average loss could perform arbitrarily poorly once applied to the local dataset of each user.

所以，参照Model-Agnostic Meta-Learning (MAML)的思路，这篇文章中，作者试图在联邦学习的思路上，训练一个最优的initial shared model，使得这个模型在每一个user上只需要非常少的几步finetune就可以适应本地的任务。

> In this paper, we study a personalized variant of the federated learning in which our goal is to find aninitial  shared  model that current or new users can easily adapt to their local dataset by performing one or a few steps of gradient descent with respect to their own data. This approach keeps all the benefits ofthe federated learning architecture, and, by structure, leads to a more personalized model foreach user.

###### Problem formulation

Building on the Model-AgnosticMeta-Learning (MAML) problem formulation, the goal of this new formulationis to find an initial point shared between all users which performs well after each user updates it with respect to its own loss function, potentially by performing a few steps of a gradient-based method.

This way, while the initial model is derived in a distributed manner over all users, thefinal model implemented by each user differs from other ones based on her or his own data. Westudy a Personalized variant of the FedAvg algorithm, called Per-FedAvg.

###### Per-FedAvg


