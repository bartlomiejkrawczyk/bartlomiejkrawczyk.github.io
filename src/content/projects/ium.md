---
title: Predicting Premium Upgrades in a Music App
description: | 
    Developed a predictive model to identify users most likely to purchase premium subscriptions on a music platform. Leveraged feature engineering, XGBoost with randomized search, and A/B testing to optimize ROC AUC performance, achieving over 0.65 and validating the model against multiple baselines.
tags:
    - university
    - python
    - flask
    - ai
    - apache_spark
    - pandas
    - py_spark
    - scikit_learn
print: true
---


# The Real Story Behind a Machine Learning Project

Machine learning projects look clean from the outside: elegant notebooks, tidy pipelines, neat metrics.
But the real story - the one that never appears in Kaggle competitions - starts with incomplete information, business pressure, messy data, and the simple question:

**"Can you tell us which users are likely to buy our premium subscription?"**

That’s how our project with **Pozytywka**, a growing music-streaming platform, began.
What follows is the full narrative of how a vague business request turned into a working machine learning system, including the mistakes, the dead ends, the unexpected insights, and the eventual breakthroughs.

This is the story as it really happened.

---

# 1. The Email That Started It All

Pozytywka had recently introduced **premium accounts** - an ad-free version of the service.
The business team expected users to jump on it immediately.

They didn’t.

So one afternoon, we received a simple, open-ended message:

> "Premium accounts aren’t catching on.
> Could we somehow determine who is most likely to buy?"

It was less a question and more a wish. But hidden inside that sentence was the seed of an ML problem - and a long journey we didn’t yet know we were about to take.

---

# 2. Meeting the Client: Turning Vagueness into Direction

The first meeting revealed something important:

The client *knew the pain* but didn’t know how to diagnose it.

They weren’t sure:

* what data was available,
* what mattered for prediction,
* how we should deliver the output,
* how they’d measure success,
* or what "good performance" even meant.

But they *did* know what they wanted:
**a tool that helps them increase premium sales**.

We asked dozens of clarifying questions. Some examples:

**"Is premium permanent?"**
Yes.

**"Can multiple users share an account?"**
No.

**"How many users do you have?"**
Around 50,000 active.

**"Can we see the data?"**
"We’ll send it. It’s all JSON."

A few days later, we received the files.

And that’s when the real work began.

---

# 3. What the Data Looked Like: The Good, the Bad, and the Ugly

The Pozytywka dataset was large - millions of events and metadata across:

* users
* tracks
* artists
* sessions
* cache-level features
* events like PLAY, SKIP, LIKE, ADVERTISEMENT, BUY_PREMIUM

But size wasn’t the problem.

Quality was.

We discovered:

* track_id = -1
* null user_id in session logs
* 118k tracks never played
* loudness values impossible in the physical universe (>0dB)
* ads recorded without any track metadata
* 3912 genres defined - users interacted with only ~50 of them
* premium_user field sometimes null, never false
* BUY_PREMIUM events extremely rare (≈2% of monthly sessions)
* some sessions occurring *after* the user bought premium

And the client confirmed the suspicion:

The data had come from *multiple legacy systems merged into one*.

This wasn’t a polished dataset. This was archaeology.

But we cleaned it up, clarified ambiguities with the client, and turned it into something usable.

---

# 4. Turning Raw Logs into Monthly User Stories

You can’t model events directly - they’re too granular.
So we transformed everything into **monthly user summaries**, building features that describe how each user behaves.

For every user, each month became one row with features like:

### Behavioral patterns

* number of sessions
* unique tracks and artists
* number of ads heard
* likes
* skips
* how long sessions were
* time of day preferences
* exploration vs repetition

### Content preferences

Aggregated track attributes:

* acousticness
* danceability
* valence
* tempo
* popularity
* genre distributions

### Engagement signals

* growth or decline in activity
* last active date
* session streaks
* listening diversity

And finally, two target variables:

1. **Will this user ever buy premium (lifetime)?**
2. **Will they buy premium next month (short-term)?**

With this, we had the foundation for modeling.

---

# 5. First Attempt: Logistic Regression and The Hard Lesson

We always start simple.

We trained logistic regression on both targets to create a baseline.

### How it performed (lifetime prediction)

* test accuracy: ~0.74
* naive baseline (predict "no"): 0.74

=> Meaning: **the model learned nothing.**

### How it performed (next-month prediction)

* test accuracy: ~0.98
* naive baseline: 0.98

=> Meaning: **the model learned nothing again.**

Why?

Because the target was so imbalanced that accuracy was meaningless:

* 75% of users never buy premium (lifetime)
* only 2% buy premium in the next month

This wasn’t a modeling problem.
It was a *data distribution* problem.

But this failure was crucial - it guided our next steps.

---

# 6. Rethinking the Strategy: Beyond Accuracy

We told the client something most teams avoid saying:

> "Accuracy won’t help us measure success."

Instead, we switched to **ROC AUC**, which can measure how well the model ranks buyers vs. non-buyers.

But even ROC AUC depends on meaningful signals.
So we went back and engineered features more aggressively:

- listening shifts
- stability vs novelty
- session gaps
- multi-month trends
- first-like-to-purchase timing
- ad-exposure patterns
- day-of-week habits
- track-level embeddings aggregated to user level

These features finally started revealing patterns.

---

# 7. Trying Stronger Models: Trees Beat Lines

With richer features, we moved to:

* Random Forest
* Gradient Boosting
* XGBoost

And this time, models started learning.

**ROC AUC jumped significantly.**

The models were discovering non-linear relationships logistic regression simply couldn’t see.

We tuned:

* learning rate
* max_depth
* number of trees
* early stopping
* feature subsampling

And we finally had a model that **ranked users well enough** to be useful.

Was it perfect?  
No.

Was it business-useful?  
Absolutely.

---

# 8. Working With the Client Again: "What will you do with these predictions?"

A model is only valuable if someone uses it.

So we returned to the business team and asked:

**"How exactly will this affect the product?"**

Together, we designed two intervention tracks:

### 1. Direct influence

Show slightly more compelling content to users predicted as "likely buyers."
Less friction, smarter ads, smarter nudges.

### 2. Indirect influence (experimental)

Use XAI (explainability) to identify the behaviors associated with purchase.  
Then generate simulations:  
- "What happens to the probability if we increase X?"  
- "What if the user hears fewer ads but more discovery tracks?"  
- "What if we shorten session gaps?"  

These simulations help test the impact of UX changes before rolling them out.

---

# 9. The Real Test: A/B Experiments in Production

Predictions are one thing.
Business impact is another.

To measure real value, Pozytywka agreed to monthly A/B tests:

* Users are permanently hashed into **control** or **experiment**.
* Only the experiment group receives model-driven experiences.
* Each month, we compare **premium purchase rates**.

This is the gold standard.
Offline metrics guide us, but **A/B tests decide the winner**.

---

# 10. What We Learned From This Long, Messy, Valuable Journey

This wasn’t the typical "clean" ML project.
It was real.

Here are the core lessons:

### 1. Most work happens before modeling

Understanding the business and data takes longer than training algorithms.

### 2. Communication is a superpower

Without aligned expectations, we would have optimized for the wrong goal.

### 3. Baseline models matter

Our logistic regression failure saved us hours of false confidence.

### 4. Feature engineering beats fancy algorithms

Behavior shifts and engagement trends turned out to be more predictive than raw session events.

### 5. A/B tests define success

Not ROC AUC.  
Not accuracy.  
Not cross-validation.  

Only real user behavior.  

---

# 11. Conclusion: From Vague Request to Real Business Value

When Pozytywka asked:

> "Can you determine who is most likely to buy premium?"

They didn’t need a model.

They needed a **process** - discovery, clarification, data investigation, experimentation, modeling, and iteration.

What we built is not just a classifier.  
It’s a decision-support system that:

* identifies likely premium buyers,
* reveals why they behave that way,
* suggests how to influence their journey,
* and measures business impact monthly.

This project wasn’t easy, but it’s the kind of challenge that shows what machine learning really is:

Not just math.  
Not just code.  
But the art of turning vague business hopes into working systems that improve real products.  
